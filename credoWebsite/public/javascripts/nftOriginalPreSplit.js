import Web3 from 'web3';
import configuration from '../../../build/contracts/MyNFT.json';

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
document.getElementById("button2").onclick = getTokenID;

async function retrieveMetadata()
{
    let metadataURI = await contract.methods.getMetadata(1).call();
    console.log(metadataURI);
    let newLink = reformatLink(metadataURI);
    logJSON(newLink);
}

async function addTokenToDB(batch_num, token_ID){
    fetch("/batch/create", {
        method: "POST",
        body: JSON.stringify({
            "batch_num": batch_num,
            "token_id": token_ID
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

async function getTokenID(){
    const batch_num = document.getElementById('inputBatch').value;

    fetch("/batch/tokenData", {
        method: "POST",
        body: JSON.stringify({
            batch_num
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

async function createBat(){

    await Moralis.start({
            apiKey: "TEJaUyO5l5d9hmTfZ29HWw8WtEEZZeJZ3OLPwOli57z6447CA0nv0GUrXdTiBaB5",
        });
    
    const batchNum = document.getElementById('inputBatch').value;
    console.log(batchNum);
    let json_file = JSON.stringify({ description: "test_desc",
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

    let responseJson = response.toJSON();
    console.log(responseJson);
    let path = responseJson[0].path;
    console.log(path);

    let new_id = await contract.methods.mintNFT(path).send({from:account});
    console.log(new_id);

    let currentTokenCounter = await contract.methods.getLatestID().call();
    console.log(currentTokenCounter);

    addTokenToDB(batchNum, currentTokenCounter);
}

function reformatLink(link)
{
    let link_tokens = link.split('/');
    link_tokens = link_tokens.slice(-3);
    let new_link = 'https://ipfs.io/' + link_tokens[0] + '/' + link_tokens[1] + '/' + link_tokens[2];
    return new_link;
}

async function logJSON(link){
    let new_link = reformatLink(link);
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