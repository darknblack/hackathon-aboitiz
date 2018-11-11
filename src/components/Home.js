import React, { Component, Fragment, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart, } from 'react-icons/fa';
import {
	IndexRedirect, Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { addClass, } from '../helper.js';
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.png';


class Home extends Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col col-md-8">
							<h2 className="main-header">TRACK YOUR ORDERS USING PILMICO'S TRACKING SYSTEM</h2>
							<div className="steps">

								<div className="row align-items-center">
									<div className="col-5">
										<img src={step1} alt=""/>
									</div>
									<div className="col-sm-7">
										<h2 className="step-header">STEP ONE</h2>
										<div className="step-info">
											Sign up or <br />Login to your account.
										</div>
									</div>
								</div>

								<div className="row align-items-center">
									<div className="col-sm-7">
										<h2 className="step-header" style={{textAlign: 'right'}}>STEP TWO</h2>
										<div className="step-info">
											Order a Pilmico product <br /> and goods here.
										</div>
									</div>
									<div className="col-5">
										<img src={step2} alt=""/>
									</div>
								</div>

								<div className="row align-items-center">
									<div className="col-5">
										<img src={step3} alt=""/>
									</div>
									<div className="col-sm-7">
										<h2 className="step-header">STEP THREE</h2>
										<div className="step-info">
											Select the tracker tab <br /> to monitor your order.
										</div>
									</div>
								</div>


							</div>
						</div>
					</div>
				</div>
				<div id="footer">
					&copy; 2018 Pilmico
				</div>
			</Fragment>
		);
	}
}

Home.propTypes = {
	// scrollTop: PropTypes.number,
	// cart: PropTypes.instanceOf(Array),
	// user: PropTypes.string,
};

const mapStateToProps = state => ({
	scrollTop: state.scrollTop,
	cart: state.cart,
	user: state.user,
});

export default connect(mapStateToProps)(Home);
