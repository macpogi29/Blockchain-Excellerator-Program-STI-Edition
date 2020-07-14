const { assert } = require('chai')

const MusikaContract = artifacts.require('./MusikaContract.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('MusikaContract', ([deployer, artist, supporter]) => {
    let musikaContract

    before(async () => {
        musikaContract = await MusikaContract.deployed()
    })

    describe('deployments', async () => {
        it('deploys successfully', async () => {
            const address = await musikaContract.address
            console.log(address)
        })

        it('checks if contract methods is working', async () => {
            const testContract = await musikaContract.test()
            console.log(testContract)
        })
    })

    describe('musika', async () => {
        let result, musikaCount
        
        before(async () => {
            result = await musikaContract.uploadMusika('Test Musika', web3.utils.toWei('1', 'Ether'),'Test Genre', 'Test Description', { from: artist })
            musikaCount = await musikaContract.musikaCount()
        })

        it('upload musika', async () => {
            assert.equal(musikaCount != 0, true, 'Musika count should not equal to 0')
            // console.log(result.logs)
            // console.log(musikaCount.toString())

            const event = result.logs[0].args

            assert.equal(event.musikaId.toNumber(), musikaCount.toNumber(), 'Id and count should be equal')
            assert.equal(event.title, 'Test Musika', 'Musika Title should be equal to Test Musika')
            assert.equal(event.price, web3.utils.toWei('1', 'Ether'), 'Price should be equal to 1 ether')
            assert.equal(event.genre, 'Test Genre', 'Genre should be equal to Test Genre')
            assert.equal(event.description, 'Test Description', 'Description should be equal to Test Description')
            assert.equal(event.owner, artist, 'The owner should be the artist')
            assert.equal(event.isSold, false, 'The musika should not be sold after uploading')
        })

        it('lists all musikas', async () => {
            const musika = await musikaContract.musikas(musikaCount)

            assert.equal(musika.musikaId.toNumber(), musikaCount.toNumber(), 'Id and count should be equal')
            assert.equal(musika.title, 'Test Musika', 'Musika Title should be equal to Test Musika')
            assert.equal(musika.price, web3.utils.toWei('1', 'Ether'), 'Price should be equal to 1 ether')
            assert.equal(musika.genre, 'Test Genre', 'Genre should be equal to Test Genre')
            assert.equal(musika.description, 'Test Description', 'Description should be equal to Test Description')
            assert.equal(musika.owner, artist, 'The owner should be the artist')
            assert.equal(musika.isSold, false, 'The musika should not be sold after uploading')
        })

        it('sells musika', async () => {
            // Check the balance of artist before it purchase
            let oldArtistBalance
            oldArtistBalance = await web3.eth.getBalance(artist)
            oldArtistBalance = new web3.utils.BN(oldArtistBalance)
            
            result = await musikaContract.puchaseMusika(musikaCount, { from: supporter, value: web3.utils.toWei('1', 'Ether')})
            const event = result.logs[0].args

            assert.equal(event.musikaId.toNumber(), musikaCount.toNumber(), 'Id and count should be equal')
            assert.equal(event.title, 'Test Musika', 'Musika Title should be equal to Test Musika')
            assert.equal(event.price, web3.utils.toWei('1', 'Ether'), 'Price should be equal to 1 ether')
            assert.equal(event.genre, 'Test Genre', 'Genre should be equal to Test Genre')
            assert.equal(event.description, 'Test Description', 'Description should be equal to Test Description')
            assert.equal(event.owner, supporter, 'The owner should be the artist')
            assert.equal(event.isSold, true, 'The musika should not be sold after uploading')

            // Check the balance of artist after musika is purchased
            let newArtistBalance
            newArtistBalance = await web3.eth.getBalance(artist)
            newArtistBalance = new web3.utils.BN(newArtistBalance)

            // Check if the new balance is equal to old balance plus the price of musika
            let price
            price = web3.utils.toWei('1', 'Ether')
            price = new web3.utils.BN(price)

            let expectedBalance
            expectedBalance = oldArtistBalance.add(price)

            console.log(newArtistBalance.toString(), expectedBalance.toString())

        })
    })
})