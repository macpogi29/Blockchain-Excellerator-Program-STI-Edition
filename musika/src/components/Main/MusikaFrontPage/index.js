import React, { Component } from 'react'
import Slider from "react-slick"
import { Modal, Item, Button } from 'react-bootstrap'

import { FaArrowRight, FaRegPlayCircle } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class MusikaFrontPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showPlayButton: false,
            show: false,
            musikaId: 0
        }

    }

    showButton = () => {
        this.setState({ showPlayButton: false })
    }

    hideButton = () => {
        this.setState({ showPlayButton: false })
    }

    handleShow = () => {
        this.setState({ show: true })
      }

      handleClose = () => {
          this.setState({ show: false })
      }

    render() {

        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

          

        return (
            <div className="container-fluid text-white">
                <div className="mt-5">

                <div className="clearfix mt-4">
                    <button className="btn btn-outline-info float-right mb-2 mr-4 rounded-pill">View More <FaArrowRight /></button>
                    <h4 className="float-left">Start Listening</h4>
                </div>
                
                <div className="container-fluid">
                    <Slider {...settings}>

                        {
                            this.props.musikas.map((musika, key) => {
                                return (
                                    <div className="p-2" key={key}>
                                        <div onClick={this.handleShow} className="card bg-dark text-white musika-frame position-relative">
                                            <img  src={musika.coverPhoto} className="card-img album-cover" alt="..." />
                                            <div className="card-img-overlay p-0 musika-image" onMouseOver={this.showButton} onMouseLeave={this.hideButton}>
                                                {
                                                    this.state.showPlayButton
                                                    ? <FaRegPlayCircle className="center btn-play"/>
                                                    : null
                                                }
                                                <p className="card-text position-absolute p-2 w-100" style={{ bottom: "0", background: "rgba(0,0,0,0.5)"}}>{musika.title}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </Slider>
                </div>

                </div>
                
                <div className="Music Category mt-5">
                        <h2 >Music By Category</h2>
                        <div className="mt-1">

                        
                        {/* <Button variant="primary" onClick={this.handleShow}>
                            Launch demo modal
                        </Button> */}

                        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                            <Modal.Body className="p-5">
                                <div className="row border-bottom pb-4">
                                    <div className="col-md-3"><img className="w-100 rounded-circle border" src="https://cont-5.p-cdn.us/images/public/int/7/6/0/4/00602567474067_1080W_1080H.jpg" /></div>
                                    <div className="col-md-9 pt-3">
                                        <h4 className="text-info">Juan Karlos Labajo</h4>
                                        <h6 className="d-inline">Genres : </h6><p className=" d-inline">R&B / Soul, Pop</p>
                                        
                                        <p>- Filipino singer-songwriter, guitarist, television personality and occasional actor.</p>
                                        <h6>TIP ARTIST</h6>
                                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-outline-info">100 PHP</button>
                                            <button type="button" class="btn btn-outline-info">500 PHP</button>
                                            <button type="button" class="btn btn-outline-info">1000 PHP</button>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="row mt-4">
                                    <div className="col-md-4">
                                        <img className="w-100" src="https://m.media-amazon.com/images/I/71l+lcahWfL._SS500_.jpg" />
                                    </div>
                                    <div className="col-md-8">
                                        <h4>Now Playing</h4>
                                        <div className="clearfix">
                                            <h6 className="d-inline">Title : </h6><p className=" d-inline">Demoyo</p>
                                        </div>
                                        <div className="clearfix">
                                            <h6 className="d-inline">Genre : </h6><p className=" d-inline">Pop</p>
                                        </div>
                                        <div className="clearfix">
                                            <h6 className="d-inline">Duration : </h6><p className=" d-inline">3:28 min</p>
                                        </div>

                                        
                                    </div>
                                </div>

                                <button className="btn btn-sm btn-info rounded-pill pr-5 pl-5 float-right">Close Player</button>
                            </Modal.Body>
                        </Modal>
                        

                            <div className="clearfix mt-4">
                                <button className="btn btn-outline-info float-right mb-2 mr-4 rounded-pill">View More <FaArrowRight /></button>
                                <h4 className="float-left">Pop Music</h4>
                            </div>
                            
                            <div className="container-fluid">
                                <Slider {...settings}>
                                {
                                    this.props.musikas.map((musika, key) => {
                                        return (
                                            <div className="p-2" key={key}>
                                                <div className="card bg-dark text-white musika-frame position-relative">
                                                    <img src={musika.coverPhoto} className="card-img album-cover" alt="..." />
                                                    <div className="card-img-overlay p-0 musika-image" onMouseOver={this.showButton} onMouseLeave={this.hideButton}>
                                                        {
                                                            this.state.showPlayButton
                                                            ? <FaRegPlayCircle className="center btn-play"/>
                                                            : null
                                                        }
                                                        <p className="card-text position-absolute p-2 w-100" style={{ bottom: "0", background: "rgba(0,0,0,0.5)"}}>{musika.title}</p>
                                                    </div>
                                                </div>

                                                

                                            </div>
                                        )
                                    })
                                }

                                </Slider>
                            </div>

                            <div className="clearfix mt-5">
                                <button className="btn btn-outline-info float-right mb-2 mr-4 rounded-pill">View More <FaArrowRight /></button>
                                <h4 className="float-left">Rock Music</h4>
                            </div>
                            <div className="container-fluid">
                                <Slider {...settings}>
                                {
                                    this.props.musikas.map((musika, key) => {
                                        return (
                                            <div className="p-2" key={key}>
                                                <div className="card bg-dark text-white musika-frame position-relative">
                                                    <img src={musika.coverPhoto} className="card-img album-cover" alt="..." />
                                                    <div className="card-img-overlay p-0 musika-image" onMouseOver={this.showButton} onMouseLeave={this.hideButton}>
                                                        {
                                                            this.state.showPlayButton
                                                            ? <FaRegPlayCircle className="center btn-play"/>
                                                            : null
                                                        }
                                                        <p className="card-text position-absolute p-2 w-100" style={{ bottom: "0", background: "rgba(0,0,0,0.5)"}}>{musika.title}</p>
                                                    </div>
                                                </div>

                                                

                                            </div>
                                        )
                                    })
                                }

                                </Slider>
                            </div>


                            <div className="clearfix mt-5">
                                <button className="btn btn-outline-info float-right mb-2 mr-4 rounded-pill">View More <FaArrowRight /></button>
                                <h4 className="float-left">Jazz</h4>
                            </div>
                            <div className="container-fluid">
                                <Slider {...settings}>
                                {
                                    this.props.musikas.map((musika, key) => {
                                        return (
                                            <div className="p-2" key={key}>
                                                <div className="card bg-dark text-white musika-frame position-relative">
                                                    <img src={musika.coverPhoto} className="card-img album-cover" alt="..." />
                                                    <div className="card-img-overlay p-0 musika-image" onMouseOver={this.showButton} onMouseLeave={this.hideButton}>
                                                        {
                                                            this.state.showPlayButton
                                                            ? <FaRegPlayCircle className="center btn-play"/>
                                                            : null
                                                        }
                                                        <p className="card-text position-absolute p-2 w-100" style={{ bottom: "0", background: "rgba(0,0,0,0.5)"}}>{musika.title}</p>
                                                    </div>
                                                </div>

                                                

                                            </div>
                                        )
                                    })
                                }

                                </Slider>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}

export default MusikaFrontPage