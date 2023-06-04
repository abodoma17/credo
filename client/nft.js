import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import configuration from '../build/contracts/MyNFT.json';
import { fileURLToPath } from 'url';

const CONTRACT_ADDRESS = configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;

const web3 = new Web3(
    Web3.givenProvider || 'http://127.0.0.1:7545'
);

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);


//Initializing Moralis
const Moralis = require("moralis").default;
const fs = require("fs");

let account;

const accountEl = document.getElementById('account');
const batchesEl = document.getElementById('batches');
document.getElementById("button1").onclick = createBat;
document.getElementById("button2").onclick = retrieveMetadata;

async function retrieveMetadata(id)
{
    metadataURI = await contract.methods.getMetadata(id).call();
    console.log(metadataURI);
    newLink = reformatLink(metadataURI);
    logJSON(newLink);
}

async function createBat(){

    await Moralis.start({
            apiKey: "TEJaUyO5l5d9hmTfZ29HWw8WtEEZZeJZ3OLPwOli57z6447CA0nv0GUrXdTiBaB5",
        });
    
    const batchNum = document.getElementById('inputBatch').value;
    console.log(batchNum);
    json_file = JSON.stringify({ description: "test_desc",
     image: "ipfs://QmS9xEJN1MUbf8dLbYSz71BX3bzoJBLWUJd4ghgvL6QcC9", 
     name: batchNum});

    // const jsonFile = new Moralis.File('file.json', {
    //     base64: json_file});
    
    const abi = [
        {
            path: 'file.json',
            content: {
                name: batchNum,
                description: "test",
                image: "ipfs://QmS9xEJN1MUbf8dLbYSz71BX3bzoJBLWUJd4ghgvL6QcC9"
            }
        }
    ];

    console.log(abi);

    const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

    responseJson = response.toJSON();
    console.log(responseJson);
    path = responseJson[0].path;
    console.log(path);

    new_id = await contract.methods.mintNFT(path).send({from:account});
    console.log(new_id);

    currentTokenCounter = await contract.methods.getLatestID().call();
    console.log(currentTokenCounter);
}

function reformatLink(link)
{
    link_tokens = link.split('/');
    link_tokens = link_tokens.slice(-3);
    new_link = 'https://ipfs.io/' + link_tokens[0] + '/' + link_tokens[1] + '/' + link_tokens[2];
    return new_link;
}

async function logJSON(link){
    new_link = reformatLink(link);
    const response = await fetch(new_link);
    const jsonData = await response.json();
    console.log(jsonData);
}

const main = async () => {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    accountEl.innerText = account;
};

main();