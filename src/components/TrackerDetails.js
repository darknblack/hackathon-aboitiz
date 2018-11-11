import React, { Component, Fragment, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart, } from 'react-icons/fa';
import {
	IndexRedirect, Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { addClass, } from '../helper.js';
import flour1 from '../images/flour1.jpg';
import f1 from '../images/Wooden-Spoon-All-Purpose-Flour-155x200.png';
import f2 from '../images/Wooden-Spoon-Cake-Flour-155x200.png';
import f3 from '../images/Wooden-Spoon-Siopao-Flour-155x200.png';
import f4 from '../images/Wooden-Spoon-Whole-Wheat-Flour-155x200.png';


class TrackerDetails extends Component {
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
				<div className="divright" style={{marginLeft: '310px', }}>
					<div className="container">
						<div className="row">
							<div className="col col-md-12">
								<Link to="/tracker">{"<"}- Go back</Link>
								<h2 className="main-header" style={{marginBottom: '5px'}}>TRACK NUMBER: 250123F</h2>
								<p>Detailed tracking of individual item</p>
								<br />
								<h4>WOODEN SPOON ALL-PURPOSE-FLOUR</h4>
								<table className="table-bordered table">
									<tr>
										<th width="200">Date</th>
										<th>Activities</th>
									</tr>
									<tr>
										<td>10/18/2018 06:35</td>
										<td>[CFS-R10 WAREHOUSE]OUT FOR DELIVERY</td>
									</tr>
									<tr>
										<td>10/18/2018 06:35</td>
										<td>[CFS-R10 WAREHOUSE]OUT FOR DELIVERY</td>
									</tr>
									<tr>
										<td>10/18/2018 06:35</td>
										<td>[CFS-R10 WAREHOUSE]OUT FOR DELIVERY</td>
									</tr>
									<tr>
										<td>10/18/2018 06:35</td>
										<td>[CFS-R10 WAREHOUSE]OUT FOR DELIVERY</td>
									</tr>
									<tr>
										<td>10/18/2018 06:35</td>
										<td>[CFS-R10 WAREHOUSE]OUT FOR DELIVERY</td>
									</tr>
									<tr>
										<td>10/18/2018 06:35</td>
										<td>[CFS-R10 WAREHOUSE]OUT FOR DELIVERY</td>
									</tr>
									<tr>
										<td>10/18/2018 06:35</td>
										<td>SAN BARTOLOME QUEZON CITY METRO MANILA PHILS. DELIVERED</td>
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

TrackerDetails.propTypes = {
	// scrollTop: PropTypes.number,
	// cart: PropTypes.instanceOf(Array),
	// user: PropTypes.string,
};

const mapStateToProps = state => ({
	scrollTop: state.scrollTop,
	cart: state.cart,
	user: state.user,
});

export default connect(mapStateToProps)(TrackerDetails);
