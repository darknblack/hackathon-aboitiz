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


class FGReceiving extends Component {
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
								<h5>ADMIN</h5>
								<p>Order Management</p>
								<Link style={{color: '#FFF'}} to="/production-planning">Production Planning</Link> <br />
								<Link style={{color: '#FFF'}} to="/rm-issuance">RM Issuance</Link> <br />
								<Link style={{color: '#FFF'}} to="/production">Production</Link> <br />
								<Link style={{color: '#FFF'}} to="/fg-receiving">FG Receiving</Link> <br />
							</div>
						</div>
					</div>
				</div>
				<div className="divright" style={{marginLeft: '310px'}}>
					<div className="container">
						<div className="row">
							<div className="col col-md-12">
								<h2 className="main-header" style={{marginBottom: '5px'}}>TRACK YOUR ORDER</h2>
								<h4>Production Planning</h4>
								<table className="table table-bordered">
									<tr>
										<th>SO Number</th>
										<th>Orders</th>
										<th>Date Ordered</th>
										<th>Action</th>
									</tr>
									<tr>
										<td>1</td>
										<td>Wheat flour</td>
										<td>November 11, 2018</td>
										<td><button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-success"><i className="fa fa-check"></i></button></td>
									</tr>
								</table>
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

FGReceiving.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(FGReceiving);
