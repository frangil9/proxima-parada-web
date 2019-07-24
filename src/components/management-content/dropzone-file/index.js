import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import uploadCurrent from '../../../redux/actions/upload-current';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import path from 'path';


class DropzoneFile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileSelected: null
    };
  }

  onDrop = async (files) => {
    const fileSelected = files[0];
    const { onUploadCurrent } = this.props;
    this.setState({
      fileSelected: fileSelected
    });
    const formData = new FormData();
    formData.append("file", fileSelected);
    formData.append("resource_type", "video");
    formData.append("upload_preset", "wfpcnaaf"); // Replace the preset name with your own
    formData.append("api_key", "648216717583523");
    formData.append("cloud_name", 'dskfedp5z');

    const res = await axios.post('https://api.cloudinary.com/v1_1/dskfedp5z/video/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (e) => {
        const { handleChangeProgress } = this.props;
        let progress = Math.round((e.loaded * 100.0) / e.total);
        handleChangeProgress(progress);
      }
    });
    const url = res.data.secure_url;
    const public_id = res.data.public_id;
    const basename = path.basename(url, '.mp4');
    const baseUrl = 'https://res.cloudinary.com/dskfedp5z/video/upload';
    const dirname = path.dirname(url);
    const baseDirname = path.basename(dirname);
    const scale = 'c_scale,h_138,w_246';
    const thubnailUrl = baseUrl + '/' + scale + '/' + baseDirname + '/' + basename + '.png';
    const metadata = {
      url,
      thubnailUrl,
      public_id
    };
    onUploadCurrent(metadata);
    console.log(res)
    console.log(metadata)
  }

  render() {
    return (
      <div className="main-dropzone">
        <div className="content-dropzone">
          <Dropzone
            onDrop={this.onDrop}
            accept="video/mp4"
          >
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {!isDragActive && 'Drag n drop file here'}
                {isDragActive && !isDragReject && "Drop it like it's hot!"}
                {isDragReject && "No accept!"}
              </div>
            )}
          </Dropzone>
        </div>
        <div>
          {this.state.fileSelected && <span>{this.state.fileSelected.name}</span>}
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onUploadCurrent: (current) => {
      dispatch(uploadCurrent(current));
    }
  };
};

export default connect(null, mapDispatchToProps)(DropzoneFile);