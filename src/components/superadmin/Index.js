import React, { Component, Fragment, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart, } from 'react-icons/fa';
import {
	IndexRedirect, Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { addClass, } from '../../helper.js';


class Index extends Component {
	render() {
		return (
			<Fragment>
				<div className="divleft">
					<div className="cms">
						<div className="account">
							<div className="account-name">
								<h5>Superadmin,</h5><br />
								<h5>Account management</h5>
								<p style={{paddingLeft: 20}}>
									<Link className="sidebar-link" to="/accounts-list">Accounts List</Link>
								</p>
								<p style={{paddingLeft: 20}}>
									<Link className="sidebar-link" to="/create-account">Create Account</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="divright" style={{marginLeft: '310px'}}>
					<div className="container">
						<div className="row">
							<div className="col col-md-12">
								<h2 className="main-header" style={{marginBottom: '5px'}}>ACCOUNT MANAGEMENT</h2>
								<p>Manage useradmin accounts</p>
								<table className="table table-bordered">
									<tr>
										<th>Email Address</th>
										<th>Role</th>
										<th>Status</th>
										<th>Action</th>
									</tr>
									<tr>
										<td>Anthonette@gmail.com</td>
										<td>Admin</td>
										<td>Active</td>
										<td>Edit</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div id="footer" className="footer-fixed">
					&copy; 2018 Pilmico
				</div>
			</Fragment>
		);
	}
}

Index.propTypes = {
	// scrollTop: PropTypes.number,
	// cart: PropTypes.instanceOf(Array),
	// user: PropTypes.string,
};

const mapStateToProps = state => ({
	scrollTop: state.scrollTop,
	cart: state.cart,
	user: state.user,
});

export default connect(mapStateToProps)(Index);
