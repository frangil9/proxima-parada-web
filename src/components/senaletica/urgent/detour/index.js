import React, { Component } from 'react';
import './style.css';
import arrow from '../../../../assets/images/arrow.png';

class Detour extends Component {

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
			</div>
		);
	}
}

export default Detour;

