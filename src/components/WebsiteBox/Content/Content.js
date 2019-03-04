import React from 'react';
import './Content.css';
import Homepage from './Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio';

const Content = () => (
    <div className="contentbox">
        <Switch>
            <Route path="/" exact={true} component={Homepage}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
        </Switch>
    </div>
)
export default Content;
