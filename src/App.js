import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseContainer from './components/senaletica/base';
import Destination from './components/senaletica/clave/destination';
import ArrivalTime from './components/senaletica/clave/arrival-time';
import PointInterest from './components/senaletica/clave/point-interest';
import Detour from './components/senaletica/urgent/detour';
import ManagementContent from './components/management-content';
import { Provider } from 'react-redux';
import store from './redux/store';
import io from 'socket.io-client';
import current from './redux/actions/stop';

class App extends Component {

  componentDidMount() {
    const socket = io('http://localhost:3001');
    socket.on('message', data => {
      store.dispatch(current(data.current));
    });
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/base" component={BaseContainer} />
              <Route exact path="/destination" component={Destination} />
              <Route exact path="/point" component={PointInterest} />
              <Route exact path="/arrival" component={ArrivalTime} />
              <Route exact path="/detour" component={Detour} />
              <Route exact path="/management" component={ManagementContent} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
