import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './Navbar';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { BreakupQuotes } from '../shared/BreakupQuotes';
import {
    FacebookShareCount, FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookMessengerShareButton,
    TwitterIcon, FacebookIcon, WhatsappIcon, FacebookMessengerIcon
} from 'react-share';


class Breakup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            index: 0
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    Next = () => {
        this.setState({ index: (this.state.index + 1) % BreakupQuotes.length });
    };

    Prev = () => {
        if (this.state.index === 0) {
            this.state = {
                index: BreakupQuotes.length
            }
        }
        this.setState({ index: (this.state.index - 1) % BreakupQuotes.length });
    };

    render() {

        const Quote = BreakupQuotes[this.state.index];

        return (
            <>
                <div className="brkup_bg">
                    <Header />
                    <div className="pt-5">
                        <div className="container">
                            <div>
                                <blockquote className="quote-space col-12 d-flex justify-content-center">
                                    <span className="col-2 dq">"</span>
                                    <span className="col-8 quotes">
                                        <span className="quote">{Quote.quote}</span><br /><br />
                                        <small className="author d-flex justify-content-end">-- {Quote.author}</small><br />
                                    </span>
                                    <span className="col-2 dq">"</span>
                                </blockquote>
                                <div className="d-flex justify-content-center">
                                    <div>
                                        <Button onClick={this.Prev} className="btn button m-1" color="primary">Previous Quote</Button>
                                        <Button onClick={this.Next} className="btn button m-1" color="warning">Next Quote</Button>
                                        <Button onClick={this.toggle} className="btn button m-1" color="success">Share</Button>
                                    </div>
                                </div>
                                <Modal isOpen={this.state.isOpen} toggle={this.toggle} className="modal-dialog modal-dialog-centered">
                                    <ModalHeader toggle={this.toggle}>
                                        Share
                                    </ModalHeader>
                                    <ModalBody>
                                        <div className="d-flex justify-content-around">
                                            <div>
                                                <FacebookShareButton url="#" quote={Quote.quote} hashtag="#BookQuotes">
                                                    <FacebookIcon size={70} round={true} />
                                                </FacebookShareButton>
                                                <div>
                                                    <FacebookShareCount url="#">
                                                        {count => count}
                                                    </FacebookShareCount>
                                                </div>
                                            </div>
                                            <div>
                                                <WhatsappShareButton url={Quote.quote} separator=":: ">
                                                    <WhatsappIcon size={70} round={true} />
                                                </WhatsappShareButton>
                                                <div>
                                                    &nbsp;
                                                </div>
                                            </div>
                                            <div>
                                                <FacebookMessengerShareButton url="#" appId="521270401588372">
                                                    <FacebookMessengerIcon size={70} round={true} />
                                                </FacebookMessengerShareButton>
                                            </div>
                                            <div>
                                                <TwitterShareButton url="#" title={Quote.quote}>
                                                    <TwitterIcon size={70} round={true} />
                                                </TwitterShareButton>
                                                <div>
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </div>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Breakup;