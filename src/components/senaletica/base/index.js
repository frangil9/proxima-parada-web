import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import countVideo from '../../../redux/actions/count-video';
import MP4Content from '../base/mp4-content';
import HeaderTime from './header-time';
import HeaderDestination from './header-destination';
import HeaderNext from './header-next';
import HeaderStep from './header-step';

const sources = [
  { id: 1, url: 'https://res.cloudinary.com/dskfedp5z/video/upload/v1561588082/STM___BRANDING___PUERTA.mp4' },
  { id: 2, url: 'https://res.cloudinary.com/dskfedp5z/video/upload/v1562182425/VOF___MEDALLAOLIMPICAUY.mp4' },
  { id: 3, url: 'https://res.cloudinary.com/dskfedp5z/video/upload/v1562182087/STM___BRANDING___ESTAS_VIENDO.mp4' },
  { id: 4, url: 'https://res.cloudinary.com/dskfedp5z/video/upload/v1562181842/DC-RECONOCER.mp4' }
];

class BaseContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderViewHeader: 1,
      source: sources[0].url,
      count: 1
    };
    this.handleCount = this.handleCount.bind(this);
  }

  componentDidMount() {
    let orderViewHeader = 1;
    this.interval = setInterval(() => {
      this.setState({
        orderViewHeader: orderViewHeader
      });
      orderViewHeader++;
      if (orderViewHeader > 4) {
        orderViewHeader = 1;
      }
    }, 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    console.log('se destruyó el componente')
  }

  handleCount() {
    this.setState({
      count: this.state.count > sources.length - 2 ? 0 : this.state.count + 1,
      source: sources[this.state.count].url
    });
    console.log(this.state.count);
  }

  render() {
    const { current } = this.props;
    return (
      <div className="content">
        {
          this.state.orderViewHeader === 1 && (<HeaderTime current={current} />)
        }
        {
          this.state.orderViewHeader === 2 && (<HeaderDestination />)
        }
        {
          this.state.orderViewHeader === 3 && (<HeaderNext />)
        }
        {
          this.state.orderViewHeader === 4 && (<HeaderStep current={current} />)
        }
        <MP4Content source={this.state.source} handleCount={this.handleCount} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current: state.current,
    countVideo: state.countVideo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountVideo: () => {
      dispatch(countVideo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);