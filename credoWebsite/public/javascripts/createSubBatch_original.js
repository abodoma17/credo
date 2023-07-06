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
document.getElementById("button1").onclick = createBat;

async function addTokenToDB(parentTokenId, parentBatchNum, subBatchNum, currentTokenCounter, selected) {
    fetch("/subBatch/create", {
        method: "POST",
        body: JSON.stringify({
            "parent_token_id": parentTokenId,
            "parent_batch_num": parentBatchNum,
            "subBatch_num": subBatchNum,
            "subBatch_token_id": currentTokenCounter,
            "recipients": selected
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

async function createBat() {

    let parentBatchNum = document.getElementById("batch_num").value;
    let parentTokenId = document.getElementById("batch_num").selectedOptions[0].text;
    let subBatchNum = document.getElementById("inputBatch").value;
    let companyName = document.getElementById("ownerName").value;
    var checked = document.querySelectorAll('#recipients :checked');
    var selected = [...checked].map(option => option.value);
    let token_creation_date = new Date().toJSON().slice(0, 10);

    if (parentBatchNum === "" || parentTokenId === "" || subBatchNum === "" || companyName === "" || selected === "") {
        document.getElementById('errorNULL').textContent = "Please fill in all the required fields.";
    }
    else {
        
        await Moralis.start({
            apiKey: "TEJaUyO5l5d9hmTfZ29HWw8WtEEZZeJZ3OLPwOli57z6447CA0nv0GUrXdTiBaB5",
        });

        const abi = [
            {
                path: 'file.json',
                content: {
                    parentBatchNum: parentBatchNum,
                    parentTokenId: parentTokenId,
                    subBatchNum: subBatchNum,
                    companyName: companyName,
                    recipients: selected,
                    token_creation_date: token_creation_date
                }
            }
        ];

        console.log(abi);

        const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

        let responseJson = response.toJSON();
        console.log(responseJson);
        let path = responseJson[0].path;
        console.log(path);

        let new_id = await contract.methods.mintNFT(path).send({ from: account });
        console.log(new_id);

        let currentTokenCounter = await contract.methods.getLatestID().call();
        console.log(currentTokenCounter);

        addTokenToDB(parentTokenId, parentBatchNum, subBatchNum, currentTokenCounter, selected);
    }

}

const main = async () => {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    accountEl.innerText = account;
};

main();