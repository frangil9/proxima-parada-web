import React, { Component } from 'react';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderManagement from './header-management';
import VideoList from './video-list';
import VideoDetail from './video-detail';

class ManagementContent extends Component {

  render() {
    return (
      <div>
        <HeaderManagement />
        <BrowserRouter>
            <Switch>
              <Route exact path="/management/item/:id" component={VideoDetail} />
              <Route exact path="/management/items" component={VideoList} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default ManagementContent;