import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { fadeInDown, zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';



const styles = {
    fadeInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    zoomIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    },
    zoomIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}

const Home = (props) => {

    return (
        <div className="home">
            <div className="container">
                <div className="title">
                    <StyleRoot>
                        <h1 className="display-3" style={styles.fadeInDown}>Random-Quote-Machine</h1>
                        <p className="">click on each section to view quotes on your favourite topic.</p>
                    </StyleRoot>
                </div>
                <div>
                    <StyleRoot>
                        <div className="card-deck" style={styles.zoomIn}>
                            <Card className="card col-12 col-md-2 col-lg-4 p-0">
                                <CardImg src="https://i.imgur.com/NIjZwMc.jpg" className="card-img-top" alt="Books" />
                                <CardBody className="card-body p-2">
                                    <CardTitle className="mb-0">
                                        <Link to="/book">
                                            <h4 className="name">Book Quotes</h4>
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card col-12 col-md-2 col-lg-4 p-0">
                                <CardImg src="https://cdn.hipwallpaper.com/i/94/28/lprF25.jpg" className="card-img-top" alt="Realtionship" />
                                <CardBody className="card-body p-2">
                                    <CardTitle className="mb-0">
                                        <Link to="/love">
                                            <h4 className="name">Love Quotes</h4>
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card col-12 col-md-2 col-lg-4 p-0">
                                <CardImg src="https://wallpapercave.com/wp/wp1924303.jpg" className="card-img-top" alt="Breakup" />
                                <CardBody className="card-body p-2">
                                    <CardTitle className="mb-0">
                                        <Link to="/breakup">
                                            <h4 className="name">BreakUp Quotes</h4>
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card col-12 col-md-2 col-lg-4 p-0">
                                <CardImg src="https://wallpaperaccess.com/full/508091.jpg" className="card-img-top" alt="Success" />
                                <CardBody className="card-body p-2">
                                    <CardTitle className="mb-0">
                                        <Link to="/success">
                                            <h4 className="name">Success Quotes</h4>
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    </StyleRoot>
                    <StyleRoot>
                        <div className="card-deck mt-4 " style={styles.zoomIn}>
                            <Card className="card col-12 col-md-2 col-lg-4 p-0">
                                <CardImg src="https://www.cimaglobal.com/Global/CIMA%20Insights%20Blog/rsz_rugby_blog.jpg" className="card-img-top" alt="Sports" />
                                <CardBody className="card-body p-2">
                                    <CardTitle className="mb-0">
                                        <Link to="/sports">
                                            <h4 className="name">Sports Quotes</h4>
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card col-12 col-md-2 col-lg-4 p-0">
                                <CardImg src="https://c1.wallpaperflare.com/preview/429/472/835/dark-birthday-cake-topper.jpg" className="card-img-top" alt="Birthday" />
                                <CardBody className="card-body p-2">
                                    <CardTitle className="mb-0">
                                        <Link to="/life">
                                            <h4 className="name">Life Quotes</h4>
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card col-12 col-md-2 col-lg-4 p-0">
                                <CardImg src="https://cdn.wallpapersafari.com/99/33/OScnf6.jpg" className="card-img-top" alt="Social-caption" />
                                <CardBody className="card-body p-2">
                                    <CardTitle className="mb-0">
                                        <Link to="/social">
                                            <h4 className="name">Social-media Quotes</h4>
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Card className="card col-12 col-md-2 col-lg-4 p-0">
                                <CardImg src="https://cdn.arstechnica.net/wp-content/uploads/2016/05/Friends_.jpg" className="card-img-top" alt="Friendship" />
                                <CardBody className="card-body p-2">
                                    <CardTitle className="mb-0">
                                        <Link to="/friend">
                                            <h4 className="name">Friendship Quotes</h4>
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    </StyleRoot>
                </div>
                <Footer />
            </div>
        </div>
    )

}

export default Home;