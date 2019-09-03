import React, { Component } from 'react';
import './style.css';
import point from '../../../../assets/images/point.png';
import { connect } from 'react-redux';
import MapContainer from '../../map';

class PointInterest extends Component {

	componentDidUpdate(prevProps, prevState) {
		const { stateTravel, } = this.props;
		if (prevProps.stateTravel !== stateTravel) {
			if (stateTravel.isInPolyFacultad === false && stateTravel.isInPolyIntendencia === false
				&& stateTravel.isInPolyCagancha === false && stateTravel.isInPolyIndependencia === false) {
				this.props.history.push('/');
			}
		}
	}

	render() {
		const { stateTravel, } = this.props;
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
					{stateTravel.isInPolyFacultad === true && 'Facultad de Derecho'}
					{stateTravel.isInPolyIntendencia === true && 'Intendencia de Montevideo'}
					{stateTravel.isInPolyCagancha === true && 'Plaza Cagancha'}
					{stateTravel.isInPolyIndependencia === true && 'Plaza Independencia'}
				</div>
				<MapContainer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		stateTravel: state.stateTravel
	};
};

export default connect(mapStateToProps, null)(PointInterest);

