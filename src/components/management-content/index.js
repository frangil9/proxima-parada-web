import React, { Component, Fragment } from 'react';
import './style.css';
import HeaderManagement from './header-management';


const VideoList = (props) => {
  const { videos } = props
  return (
    <div className="content-main-video">
      <div className="list-center">
        <ul className="col-md-9 list-group">
          {videos.map(video => <VideoListItem key={video.id} url={video.url} />)}
        </ul>
      </div>
    </div>
  );
}

const VideoListItem = (props) => {
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={props.url} />
        </div>
        <div className="media-body">
          <div className="title-item">Titulo del video</div>
          <div className="description-item">Titulo del video</div>
        </div>
      </div>
    </li>
  );
}

class VideoDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: 'https://res.cloudinary.com/dskfedp5z/video/upload/v1561588082/STM___BRANDING___PUERTA.mp4'
    }
  }

  render() {
    return (
      <div className="content-main-video">
        <div className="detail-video-center">
          <div className="video-detail col-md-9">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={this.state.url}></iframe>
            </div>
            <div className="details">
              <div className="title-item-detail">Titulo</div>
              <div className="description-item-detail">Description</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const thubnails = [
  { id: 1, url: 'https://res.cloudinary.com/dskfedp5z/video/upload/c_scale,h_138,w_246/v1562182425/VOF___MEDALLAOLIMPICAUY.png' },
  { id: 2, url: 'https://res.cloudinary.com/dskfedp5z/video/upload/c_scale,h_138,w_246/v1562182087/STM___BRANDING___ESTAS_VIENDO.png' },
  { id: 3, url: 'https://res.cloudinary.com/dskfedp5z/video/upload/c_scale,h_138,w_246/v1562181842/DC-RECONOCER.png' }
];

class ManagementContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thubnails: thubnails
    };
  }

  render() {
    return (
      <div>
        <HeaderManagement />
        <VideoList videos={this.state.thubnails} />
        {/*<VideoDetail />*/}
      </div>
    );
  }

}

export default ManagementContent;