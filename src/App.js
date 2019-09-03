import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseContainer from './components/senaletica/base';
import Destination from './components/senaletica/clave/destination';
import ArrivalTime from './components/senaletica/clave/arrival-time';
import PointInterest from './components/senaletica/clave/point-interest';
import Detour from './components/senaletica/urgent/detour';
import MapContainer from './components/senaletica/map';
import ManagementContent from './components/management-content';
import { Provider } from 'react-redux';
import store from './redux/store';
import io from 'socket.io-client';
import current from './redux/actions/stop';
import nextsStops from './redux/actions/nexts_stops';
import {API_URL} from './utils/config';

var socket;
class App extends Component {

  componentDidMount() {
    socket = io('https://67.205.155.24:3001');
    socket.on('message', data => {
      store.dispatch(current(data.current));
      store.dispatch(nextsStops(data.nexts_stops));
    });
  }

  sendSocket = (number_stop) => {
    socket.emit("stop_current", number_stop);
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/demo/base" render={(props) => (
                <BaseContainer sendSocket={this.sendSocket} {...props} />
              )} />
              <Route exact path="/demo/destination" component={Destination} />
              <Route exact path="/demo/point" component={PointInterest} />
              <Route exact path="/demo/arrival" component={ArrivalTime} />
              <Route exact path="/demo/detour" component={Detour} />
              <Route exact path="/demo/map" component={MapContainer} />
              <Route path="/demo/management" component={ManagementContent} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
