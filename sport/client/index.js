import React from 'react'
import {render} from 'react-dom'
import Wrap from './page/wrap/wrap'
import History from './page/history/history'
import Today from './page/today/today'
import Mine from './page/mine/mine'
import {Route,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/index'
import {Router} from 'react-router'
import createHistory from 'history/createHashHistory'
let history = createHistory();

window._store=store;
render(
    <Provider store={store}>
        <Router history={history}>
            <Wrap>
                <Route path="/history" component={History}/>
                <Route path="/today" component={Today}/>
                <Route path="/mine" component={Mine}/>
                <Redirect to="/today" />
            </Wrap>
        </Router>
    </Provider>,
    document.querySelector('.home')
);

import './style/index.less'