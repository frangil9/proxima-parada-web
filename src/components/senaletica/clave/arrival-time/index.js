import React, { Component } from 'react';
import './style.css';
import clock from '../../../../assets/images/clock.png';

class ArrivalTime extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//setTimeout(() => {
		//this.props.history.push('/base');
		//}, 5000);
	}

	render() {
		return (
			<div className="content-arrival">
				<div className="header-arrival">
					<div className="img-clock">
						<img src={clock} alt="Clock" />
					</div>
					<div className="content-title-arrival">
						<div className="title-arrival">
							Tiempo de llegada
          </div>
					</div>
				</div>
			</div>
		);
	}
}

export default ArrivalTime;

