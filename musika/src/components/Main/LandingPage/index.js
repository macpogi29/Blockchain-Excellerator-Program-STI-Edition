import React, { Component } from 'react'



class LandingPage extends Component {
    render() {

        

        return (
            <div className="container-fluid text-white mt-4">
                <div className="TopPage">
                    <h1 className="text-info">Are you an aspiring music artist?</h1>
                    <h5>Community for aspiring Music Artist and a safe place to promote your own made songs</h5>
                    <div className="card bg-dark text-white mt-4">
                        <img style={{ height: "300px", width: "100%", objectFit: "cover", objectPosition: "right" }} src="https://i.pinimg.com/originals/90/fc/87/90fc873b81ebb9497ce1999d372334e5.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay text-center" style={{ background: "rgba(0,0,0,0.5)"}}>
                            <p>Connecting artists and fans directly using Ethereum</p>
                            <h2 className="card-title display-4 pt-0 mt-0">SHARE YOUR ORIGINAL PIECE</h2>
                            <div className="card-text">
                                <h5>No fees, earn 100% of your sales and tips, </h5>
                                <h5>automatically split payments with collaborators</h5><br/>
                                <button className="btn btn-info rounded-pill">ARTIST: REGISTER NOW!</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default LandingPage
