import React, { Component } from 'react';
import './style.css';
import flag from '../../../../assets/images/flag.png';

class Destination extends Component {

	render() {
		return (
			<div className="content-dest">
				<div className="header-dest">
					<div className="img-flag">
						<img src={flag} alt="Flag" />
					</div>
					<div className="title-dest">
						Destino
					</div>
				</div>
				<div className="content-main">
					Ciudad Vieja
				</div>
			</div>
		);
	}
}

export default Destination;

