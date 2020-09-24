import React from 'react';

// react router
import {
    HashRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

// containers
import {
    GamePage,
    StartPage
} from '.';


const Routers = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/'  component={() => <Redirect to='start' />} />
                <Route exact path='/start' component={StartPage} />
                <Route exact path='/game' component={GamePage} />
            </Switch>
        </HashRouter>
    );
};


export { Routers };