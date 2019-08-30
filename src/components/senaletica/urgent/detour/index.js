import React, { Component } from 'react';
import './style.css';
import arrow from '../../../../assets/images/arrow.png';
import { connect } from 'react-redux';
import MapContainer from '../../map';

class Detour extends Component {

	componentDidUpdate(prevProps, prevState) {
		const { stateTravel, } = this.props;
		if (prevProps.stateTravel !== stateTravel) {
			if (stateTravel.isInPolyDetour === false) {
				this.props.history.push('/base');
			}
		}
	}

	render() {
		return (
			<div className="content-detour">
				<div className="header-detour">
					<div className="img-detour">
						<img src={arrow} alt="Arrow" />
					</div>
					<div className="content-title-detour">
						<div className="title-detour">
							Atención
          	</div>
						<div className="subtitle-detour">
							Desvío
          	</div>
					</div>
				</div>
				<div className="content-stop">
					<span className="title-stop">Joaquín Requena</span>
				</div>
				<div className="main-detour">
					<div className="title-main-detour">
						Desde
          </div>
					<div className="title-main-detour-stop">
						Joaquín Requena
						</div>
				</div>
				<div className="main-detour">
					<div className="title-main-detour">
						Hasta
          </div>
					<div className="title-main-detour-stop">
						Arenal Grande
						</div>
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

export default connect(mapStateToProps, null)(Detour);

