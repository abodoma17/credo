import Web3 from 'web3';
import configuration from '../../../build/contracts/MyNFT.json';

const CONTRACT_ADDRESS = configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;

let tokenId = document.getElementById("tokenID").innerText;
let subBatch_id = document.getElementById("subbatch_token_id").innerText;

const web3 = new Web3(
    Web3.givenProvider || 'http://127.0.0.1:7545'
);

async function retrieveMetadata(id)
{
    let metadataURI = await contract.methods.getMetadata(id).call();
    console.log(metadataURI);
    let newLink = reformatLink(metadataURI);
    logJSON(newLink);
}

async function retrieveSubBatchMetadata(id)
{
    let metadataURI = await contract.methods.getMetadata(id).call();
    console.log(metadataURI);
    let newLink = reformatLink(metadataURI);
    logJSONSubBatch(newLink);
}

function reformatLink(link)
{
    let link_tokens = link.split('/');
    link_tokens = link_tokens.slice(-3);
    let new_link = 'https://ipfs.io/' + link_tokens[0] + '/' + link_tokens[1] + '/' + link_tokens[2];
    return new_link;
}

async function logJSONSubBatch(link){
    let new_link = reformatLink(link);
    const response = await fetch(new_link);
    const jsonData = await response.json();
    console.log(jsonData);
    document.getElementById("subbatch_number").innerText = jsonData.subBatchNum;
    document.getElementById("DistributorName").innerText = jsonData.companyName;
    document.getElementById("token_creation_date").innerText = jsonData.token_creation_date;
    jsonData.recipients.forEach(recipient => {
        let li = document.createElement('li');
        li.textContent = recipient;
        li.classList = "font-extralight text-2xl"

        document.getElementById("recipients").appendChild(li);
    });
}

async function logJSON(link){
    let new_link = reformatLink(link);
    const response = await fetch(new_link);
    const jsonData = await response.json();
    console.log(jsonData);
    document.getElementById("name").innerText = jsonData.batch_num;
    document.getElementById("owner_name").innerText = jsonData.owner_name;
    document.getElementById("medicine_name").innerText = jsonData.medicine_name;
    document.getElementById("expiration_date").innerText = jsonData.expiration_date;
    document.getElementById("production_date").innerText = jsonData.production_date;
}

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const main = async () => {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    await retrieveMetadata(tokenId);
    await retrieveSubBatchMetadata(subBatch_id);
};

main();