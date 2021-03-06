import React, { Component } from 'react'

import Web3 from 'web3'
import Logo from '../Images/metamask.gif'

import Navbar from './Navbar/'
import LandingPage from './LandingPage/'
import MusikaFrontPage from './MusikaFrontPage/'
import Footer from './Footer/'

// Importing Smart Contracts
import MusikaContract from '../../abis/MusikaContract.json'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            musikaCount: 0,
            musikas: [],
            loading: false
        }

        this.uploadMusika = this.uploadMusika.bind(this)
    }
    
    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3() {
        if(window.ethereum){
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }else if(window.web3){
            window.web3 = new Web3(window.web3.currentProvider)
        }else{
            window.alert('Non-ethereum browser detected. You should consider trying metamask!')
        }
    }

    async loadBlockchainData() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        const networkData = MusikaContract.networks[networkId]
        if(networkId){
            const musikaContract = web3.eth.Contract(MusikaContract.abi, networkData.address)
            this.setState({ musikaContract })
            const musikaCount = await musikaContract.methods.musikaCount().call()
            // console.log(musikaCount.toString())
            // console.log(musikaContract)

            for(var i = 1; i <= musikaCount; i ++){
                const musika = await musikaContract.methods.musikas(i).call()
                this.setState({
                    musikas: [...this.state.musikas, musika]
                })
            }
        }else{
            window.alert('Smart contracts not deployed to detected networks')
        }
    }

    uploadMusika = (title, price, genre, description, coverPhoto) => {
        this.state.musikaContract.methods.uploadMusika(title, price, genre, description, coverPhoto).send({ from: this.state.account })
        .once('receipt', (receipt) => {
            
        })
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    render() {
        return (
            <div>
                <Navbar />
                <LandingPage account={this.state.account}/>
                <MusikaFrontPage musikas={this.state.musikas} uploadMusika={this.uploadMusika}/>
                <Footer />
            </div>
        )
    }
}

export default Main