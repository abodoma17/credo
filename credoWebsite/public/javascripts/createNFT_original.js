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

async function addTokenToDB(batch_num, token_ID) {
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

async function createBat() {

    let batch_num = document.getElementById("inputBatch").value;
    let owner_name = document.getElementById("manufacturerName").value;
    let medicine_name = document.getElementById("inputMedicineName").value;
    let expiration_date = document.getElementById("inputExpiration").value;
    let production_date = document.getElementById("inputProduction").value;
    let token_creation_date = new Date().toJSON();

    if (batch_num === "" || owner_name === "" || medicine_name === "" || expiration_date === "" || production_date === "") {
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
                    batch_num: batch_num,
                    owner_name: owner_name,
                    medicine_name: medicine_name,
                    expiration_date: expiration_date,
                    production_date: production_date,
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

        addTokenToDB(batch_num, currentTokenCounter);
    }

}

const main = async () => {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    accountEl.innerText = account;
};

main();