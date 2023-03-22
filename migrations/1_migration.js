const Batches = artifacts.require("Batches");

module.exports = function(deployer) {
    deployer.deploy(Batches);
};