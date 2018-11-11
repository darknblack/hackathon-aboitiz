import React, { Component, Fragment, } from 'react';
import axios from 'axios';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart, } from 'react-icons/fa';
import {
	IndexRedirect, Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import $ from 'jquery';
import { addClass, } from '../helper.js';
import step1 from '../images/step1.png';
import step2 from '../images/step2.png';
import step3 from '../images/step3.png';



class Login extends Component {
	constructor(props) {
		super(props);
		this.username = React.createRef();
		this.password = React.createRef();

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const username = this.username.current.value;
		const password = this.password.current.value;

		const data = {
			username,
			password,
		};

	}

	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col col-md-5">
							<div className="login">
								<h2 className="login-header">LOGIN</h2>
								{/*<form method="POST">*/}
								<input ref={this.username} type="text" className="login-form-field" placeholder="Username" />
								<input ref={this.password} type="password" className="login-form-field" placeholder="Password" />
								{/*<button className="btn btn-primary login-btn" value="btn login-btn">*/}
								<Link className="btn btn-primary login-btn" to="/tracker">LOGIN</Link>
								{/*</button>*/}
								{/*</form>*/}
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

Login.propTypes = {
	// scrollTop: PropTypes.number,
	// cart: PropTypes.instanceOf(Array),
	// user: PropTypes.string,
};

const mapStateToProps = state => ({
	scrollTop: state.scrollTop,
	cart: state.cart,
	user: state.user,
});

export default connect(mapStateToProps)(Login);
