import React, { Component } from 'react'
import { Nav, Item, Button, Modal } from 'react-bootstrap';

class UploadForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }

    }

    handleClose = () => {
        this.setState({ show: false })
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    onFormSubmit = e => {
        e.preventDefault()
        const title = this.title.value
        const price = window.web3.utils.toWei(this.price.value.toString(), 'Ether');
        const genre = this.genre.value
        const description = this.description.value
        const coverPhoto = this.coverPhoto.value
        this.props.uploadMusika(title, price, genre, description, coverPhoto)
    }

    render() {
        return (
            <div>
                <Button className="rounded-pill float-right pl-5 pr-5" variant="info" onClick={this.handleShow}>
                        Upload New Musika
                    </Button>

                    <Modal size="lg" centered show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header className="bg-body text-white rounded-0" closeButton>
                        <Modal.Title>Upload New Musika</Modal.Title>
                        </Modal.Header>
                        
                        <form onSubmit={this.onFormSubmit}>
                            <Modal.Body>
                                    <div className="form-group">
                                        <h6 className="">Title</h6>
                                        <input
                                            id="title"
                                            type="text"
                                            className="form-control"
                                            ref={( input) => this.title = input }
                                            placeholder="Your Musika Title"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <h6 className="">Price</h6>
                                        <input
                                            id="price"
                                            type="text"
                                            className="form-control"
                                            ref={( input) => this.price = input }
                                            placeholder="Your Musika Price"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <h6 className="">Genre</h6>
                                        <input
                                            id="genre"
                                            type="text"
                                            className="form-control"
                                            ref={( input) => this.genre = input }
                                            placeholder="Your Musika Genre"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <h6 className="">Description</h6>
                                        <input
                                            id="description"
                                            type="text"
                                            className="form-control"
                                            ref={( input) => this.description = input }
                                            placeholder="Your Musika Description"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <h6 className="">Audio File</h6>
                                        <input
                                            id="audio"
                                            type="file"
                                            className="form-control-file"
                                            ref={( input) => this.audio = input }
                                            placeholder="Your Musika Description"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <h6 className="">Cover Photo</h6>
                                        <input
                                            id="coverPhoto"
                                            type="text"
                                            className="form-control"
                                            ref={( input) => this.coverPhoto = input }
                                            placeholder="Your Musika Cover Photos"
                                            required
                                        />
                                    </div>

                                </Modal.Body>
                                <Modal.Footer className="bg-body rounded-0">
                                <Button className="rounded-pill" variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <button type="submit" className="btn btn-info pl-5 pr-5 rounded-pill">Upload Musika</button>
                            </Modal.Footer>
                        </form>
                    </Modal>
            </div>
        )
    }
}

export default UploadForm