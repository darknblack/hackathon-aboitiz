import React, { Component, Fragment, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart, } from 'react-icons/fa';
import {
	IndexRedirect, Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { bindActionCreators, } from 'redux';
import { addClass, } from '../helper.js';
import flour1 from '../images/flour1.jpg';
import f1 from '../images/Wooden-Spoon-All-Purpose-Flour-155x200.png';
import f2 from '../images/Wooden-Spoon-Cake-Flour-155x200.png';
import f3 from '../images/Wooden-Spoon-Siopao-Flour-155x200.png';
import f4 from '../images/Wooden-Spoon-Whole-Wheat-Flour-155x200.png';
import {TRACK} from './Actions';


class Tracker extends Component {
	constructor(props) {
		super(props);
		this.track = React.createRef();
		this.props.TRACK(0);
	}

	render() {
		return (
			<Fragment>
				<div className="divleft">
					<div className="cms">
						<div className="account">
							<div className="account-name">
								<h5>Anthonette Tan</h5>
								<p>My Orders</p>
							</div>
						</div>
					</div>
				</div>
				<div className="divright" style={{marginLeft: '310px'}}>
					<div className="container">
						<div className="row">
							<div className="col col-md-12">
								<h2 className="main-header" style={{marginBottom: '5px'}}>TRACK YOUR ORDER</h2>
								<p>Enter the Tracking Code in the field</p>
								<input ref={this.track} type="text" className="tracker-form-field" placeholder="id" />
								<button onClick={() => this.props.TRACK(parseInt(this.track.current.value))} className="tracker-btn-search">Search</button>
								<br />
								<br />
								{ this.props.order[this.props.trackingNumber].item === null || this.props.trackingNumber == null ?
									'No orders to display. Please enter a valid tracking number.'
									:
									<div>
										<br />
										<p>Tracking Number: {this.props.trackingNumber}</p>
										<table className="table table-bordered">
											<tr>
												<th>SKU</th>
												<th>Product Name</th>
												<th>Qty</th>
												<th>Status</th>
												<th>Date</th>
												<th>Summary</th>
											</tr>
											{ this.props.order[this.props.trackingNumber].item != undefined && this.props.order[this.props.trackingNumber].item.map((item, key) => {
												return (
													<tr key={key}>
														<td>{item.sku}</td>
														<td>{item.name}</td>
														<td>{item.quantity}</td>
														<td>Pending</td>
														<td>November 11, 2018</td>
														<td><Link to="/tracker/1">View more details</Link></td>
													</tr>
												);
											})}
										</table>
									</div>
								}
							</div>
						</div>
					</div>
				</div>
				<div id="footer" className="footer-fixed">
					&copy; 2018 Pilmico {this.props.order.length - 1}
				</div>
			</Fragment>
		);
	}
}

Tracker.propTypes = {
	// scrollTop: PropTypes.number,
	// cart: PropTypes.instanceOf(Array),
	// user: PropTypes.string,
};

const mapStateToProps = state => ({
	scrollTop: state.scrollTop,
	cart: state.cart,
	order: state.order,
	user: state.user,
	trackingNumber: state.trackingNumber,
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		TRACK,
	}, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
