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
              <Route exact path="/demo/management/item/:id" component={VideoDetail} />
              <Route exact path="/demo/management/items" component={VideoList} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default ManagementContent;