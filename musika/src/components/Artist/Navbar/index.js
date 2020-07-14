import React, { Component } from 'react'

import MusikaLogo from '../../Images/musika.png';
import UploadForm from '../UploadForm';

class Navbar extends Component {
    render() {
        return (
            <div className="pb-5">
                <div className="bg-transaparent-5 pt-5 pb-4">
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-md-2 text-center">
                                <img className="w-100 rounded-circle border border-white" src="https://cont-5.p-cdn.us/images/public/int/7/6/0/4/00602567474067_1080W_1080H.jpg" />
                            </div>
                            <div className="col-md-10">
                                <button className="btn btn-sm btn-info pl-5 pr-5 rounded-pill float-right">Logout</button>
                                <h4 className="text-info">Juan Karlos Labajo</h4>
                                <h6 className="d-inline">Genres : </h6><p className=" d-inline">R&B / Soul, Pop</p>
                                <h5 className="mt-3">Bio </h5>
                                <p>Filipino singer-songwriter, guitarist, television personality and occasional actor.</p>

                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <div className="w-100 text-center p-2 border rounded">
                                            <h6>Musika Uploaded</h6>
                                            <h5 className="text-info">7</h5>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="w-100 text-center p-2 border rounded">
                                            <h6>Supporters</h6>
                                            <h5 className="text-info">1,5k +</h5>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="w-100 text-center p-2 border rounded">
                                            <h6>Musika Uploaded</h6>
                                            <h5 className="text-info">30</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">MUSIKA</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">My Musika <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Wallet</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Notification</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container mt-5 text-white">
                    <UploadForm uploadMusika={this.props.uploadMusika}/>

                    <h4>Your Musika List</h4>
                    <div className="row mt-4">


                        {
                            this.props.musikas.map((musika, key) => {
                                return  musika.owner === this.props.account
                                        ?   <div className="col-md-3 mb-3">
                                                <div className="card bg-dark text-white musika-frame position-relative">
                                                    <img src={musika.coverPhoto} className="card-img album-cover" alt="..." />
                                                    <div className="card-img-overlay p-0 musika-image">
                                                        <p className="card-text position-absolute p-2 w-100" style={{ bottom: "0", background: "rgba(0,0,0,0.5)"}}>{musika.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        : null
                            })
                        }
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default Navbar