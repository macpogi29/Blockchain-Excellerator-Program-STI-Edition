import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Web3 from 'web3'

import Navbar from './Navbar/'
import Main from './Main/'

// Importing Smart Contracts
import MusikaContract from '../../abis/MusikaContract.json'
import UploadForm from './UploadForm'

class Artist extends Component {

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

    render() {
        return (
            <div>
                <Navbar 
                    uploadMusika={this.uploadMusika} 
                    musikas={this.state.musikas} 
                    account={this.state.account}/>
            </div>
            
        )
    }
}

export default Artist