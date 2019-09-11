import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import './video-react.css';

class MP4Content extends Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { player } = this.player.getState();
    const { handleCount } = this.props;
    if (this.props.source !== prevProps.source) {
      this.player.load();
    } else {
      if (player.ended) {
        handleCount();
      }
    }
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  render() {
    const { source } = this.props;
    return (
      <div>
        <Player ref={(player) => { this.player = player }} autoPlay>
          <source src={source} />
          <ControlBar autoHide={false} disableCompletely={true} />
        </Player>
      </div>
    );
  }
}

export default MP4Content;