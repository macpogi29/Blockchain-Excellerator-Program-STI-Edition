import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small special-color-dark pt-4 mt-5 bg-transaparent-5">
            <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 mb-4 text-center text-white">
                    <h4>Stay Tuned</h4>
                    <p>Sign up to your newsletter to receive our awesome music breakdown.</p>
                    <form className="input-group">
                        <input type="text" className="form-control" placeholder="Your email"
                        aria-label="Your email" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                        <button className="btn btn-info my-0" type="button">Sign up</button>
                        </div>
                    </form>
                    <p className="lead mt-4">Powered by Blockchain Technology</p>
                    <img className="w-50" src="https://steemitimages.com/DQmUyX4vcdk1EPidWN2awdMKnK38yxfmv4sS3t1VgfmChzk/Blockchain-Logo-Blue6.png"/>

                </div>
                <div className="col-md-3"></div>

            </div>

            </div>
                <div className="footer-copyright text-center py-3 border-top border-dark text-white">
                    <a href="#" className="text-white border-right border-light pr-2"> Homepage</a>
                    <a href="#" className="text-white border-right border-light pr-2"> FAQ</a>
                    <a href="#" className="text-white border-right border-light pr-2"> Terms of Services</a>
                    <a href="#" className="text-white border-right border-light pr-2"> Legal Agreements</a>
                    <a href="#" className="text-white" > 2020 @copyright MUsikaBlockchain.com</a>
                </div>

            </footer>
        )
    }
}

export default Footer