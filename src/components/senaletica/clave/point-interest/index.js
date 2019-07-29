import React, { Component } from 'react';
import './style.css';
import point from '../../../../assets/images/point.png';

class PointInterest extends Component {

	componentDidMount() {
		//setTimeout(() => {
		//this.props.history.push('/base');
		//}, 5000);
	}

	render() {
		return (
			<div className="content-point">
				<div className="header-point">
					<div className="img-point">
						<img src={point} alt="Point" />
					</div>
					<div className="title-point">
						Punto de interés
					</div>
				</div>
				<div className="content-main-point">
					Facultad de Derecho
				</div>
			</div>
		);
	}
}

export default PointInterest;

