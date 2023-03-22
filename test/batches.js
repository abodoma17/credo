const Batches = artifacts.require("Batches");
const assert = require('assert');

contract('Batches', (accounts) => {
    // Use account 1 of the accounts provided in ganache
    const buyer = accounts[1];
    const batchNumber = 1250;

    it('should allow a user to register a batch', async () => {
        //Grab an instance of the contract deployed
        const instance = await Batches.deployed();
        //Grab the ORIGINAL UNEDITED array from the instance, batches() => tf
        const originalBatches = await instance.batches;

        await instance._createBatch(batchNumber);

        const updatedBatches = await instance.batches;

        assert.equal(
            originalBatches,
            updatedBatches,
            'failed'
        );
    });
}

);