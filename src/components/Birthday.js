import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Header from './Navbar';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


const Birthday = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Header />
            <div className="birthday_bg pt-5">
                <div className="container">
                    <div>
                        <blockquote className="quote-space col-12 d-flex justify-content-center">
                            <span className="col-2 dq">"</span>
                            <span className="col-8 quotes">
                                <span className="quote">That's the thing about books. They let you travel without moving your feet.</span><br />
                                <small class="author">-- Harry</small>
                            </span>
                            <span className="col-2 dq">"</span>
                        </blockquote>
                        <div className="d-flex justify-content-center">
                            <section className="row">
                                <div className="col-4">
                                    <Button color="primary">Previous</Button>
                                </div>
                                <div className="col-4">
                                    <Button color="warning">Next</Button>
                                </div>
                                <div className="col-4">
                                    <Button onClick={toggle} color="success">Share</Button>
                                </div>
                            </section>
                        </div>
                        <Modal isOpen={isOpen} toggle={toggle} className="modal-dialog modal-dialog-centered">
                            <ModalHeader toggle={toggle}>
                                Share
                            </ModalHeader>
                            <ModalBody>
                                <div className="d-flex justify-content-around">
                                    <a href="https://www.facebook.com/"><span className="fa fa-facebook fa-lg bg-primary"></span></a>
                                    <a href="https://www.instagram.com/"><span className="fa fa-instagram fa-lg bg-success"></span></a>
                                    <a href="https://myaccount.google.com/"><span className="fa fa-google fa-lg bg-danger"></span></a>
                                    <a href="https://twitter.com/"><span className="fa fa-twitter fa-lg bg-info"></span></a>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Birthday;