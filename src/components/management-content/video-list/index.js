import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { getPublicationsThunk } from '../../../redux/actions/publications';
import VideoListItem from '../video-list-item';


class VideoList extends Component {

    componentDidMount() {
        const { onGetPublicationsThunk } = this.props;
        onGetPublicationsThunk();
    }
    
    goTo = (path) => {
        this.props.history.push(path);
    }

    render() {
        const { publications } = this.props;
        return (
            <div className="content-main-video">
                <div className="list-center">
                    <ul className="col-md-9 list-group">
                        {publications.map(publication => <VideoListItem key={publication._id} item={publication} goTo={this.goTo} />)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        publications: state.publications
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPublicationsThunk: () => {
            dispatch(getPublicationsThunk());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
