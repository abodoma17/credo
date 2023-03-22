import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css';
import configuration from '../build/contracts/MyNFT.json';

const CONTRACT_ADDRESS = configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;

const web3 = new Web3(
    Web3.givenProvider || 'http://127.0.0.1:7545'
);

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

let account;

const accountEl = document.getElementById('account');
const batchesEl = document.getElementById('batches');
document.getElementById("button1").onclick = createBat;

async function createBat() {
    const batchNum = document.getElementById('inputBatch').value;
    console.log(batchNum);
    json_file = console.log(JSON.stringify({ description: "test_desc",
     image: "ipfs://QmS9xEJN1MUbf8dLbYSz71BX3bzoJBLWUJd4ghgvL6QcC9", 
     name: batchNum}));
    console.log(json_file);
    await contract.methods.mintNFT("ipfs://QmRumYpVzK5bb8T2cuMzThB72ctVxHz2GynvYqUehqBzcU").send({from:account});
    console.log("done");
}


const main = async () => {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    accountEl.innerText = account;
};

main();