const myNFT = artifacts.require("myNFT");

module.exports = function(deployer) {
    deployer.deploy(myNFT);
};