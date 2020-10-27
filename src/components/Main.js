import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomePage';
import Book from './Books';
import Love from './Love';
import Breakup from './Breakup';
import Success from './Success';
import Sports from './Sports';
import Life from './Life';
import Social from './Social';
import Friend from './Friend';

class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Switch>
                        <Route path="/home" component={() => <Home />} />
                        <Route path="/book" component={() => <Book />} />
                        <Route path="/love" component={() => <Love />} />
                        <Route path="/breakup" component={() => <Breakup />} />
                        <Route path="/success" component={() => <Success />} />
                        <Route path="/sports" component={() => <Sports />} />
                        <Route path="/life" component={() => <Life />} />
                        <Route path="/social" component={() => <Social />} />
                        <Route path="/friend" component={() => <Friend />} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Main;