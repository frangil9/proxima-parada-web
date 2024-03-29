import React, { Component } from 'react';
import './style.css';
import clock from '../../../../assets/images/clock.png';
import { connect } from 'react-redux';

const ItemArrival = (props) => {
	const { item, sumTime } = props;
	return (
		<div className="item-arrival">
			<div className="item-text-arrival">
				{item.next_stop}
			</div>
			<div>
				<span className="minutes-arrival">{sumTime}</span>
				<span className="min-arrival">min.</span>
			</div>
		</div>
	);
}

class ArrivalTime extends Component {

	componentDidMount() {
		setTimeout(() => {
			this.props.history.push('/');
		}, 15000);
	}

	render() {
		const { nextsStops } = this.props;
		let sumTime = 0;
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
				<div className="main-arrival">
					{nextsStops.filter((elem, index) => index < 4).map((item, index) => {
						sumTime += item.time_next_stop;
						return (<ItemArrival key={item.number_stop} item={item} sumTime={sumTime} />);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		nextsStops: state.nextsStops
	};
};

export default connect(mapStateToProps, null)(ArrivalTime);

