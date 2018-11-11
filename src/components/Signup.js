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


class Signup extends Component {
	constructor(props) {
		super(props);
		this.username = React.createRef();
		this.firstname = React.createRef();
		this.lastname = React.createRef();
		this.email = React.createRef();
		this.phonenum = React.createRef();
		this.address = React.createRef();
		this.password = React.createRef();

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		const username = this.username.current.value;
		const firstname = this.firstname.current.value;
		const lastname = this.lastname.current.value;
		const email = this.email.current.value;
		const phonenum = this.phonenum.current.value;
		const address = this.address.current.value;
		const password = this.password.current.value;

		const data = {
			username,
			firstname,
			lastname,
			email,
			phonenum,
			address,
			password,
		};

		console.log(data);

		event.preventDefault();
	}

	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col col-md-5">
							<div className="login">
								<h2 className="login-header">SIGN UP</h2>
								<form onSubmit={this.onSubmit}>
									<input type="text" ref={this.username} require="true" className="login-form-field" placeholder="Username" />
									<input type="text" ref={this.firstname} require="true" className="login-form-field" placeholder="First Name" />
									<input type="text" ref={this.lastname} require="true" className="login-form-field" placeholder="Last Name" />
									<input type="email" ref={this.email} require="true" className="login-form-field" placeholder="E-mail Address" />
									<input type="text" ref={this.phonenum}  require="true" className="login-form-field" placeholder="Mobile Phone Number" />
									<input type="text" ref={this.address} require="true" className="login-form-field" placeholder="Full House Address" />
									<input type="password" ref={this.password}  require="true" className="login-form-field" placeholder="Password" />
									<button className="btn btn-primary login-btn" type="submit" value="submit">SIGN UP</button>
								</form>
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

Signup.propTypes = {
	// scrollTop: PropTypes.number,
	// cart: PropTypes.instanceOf(Array),
	// user: PropTypes.string,
};

const mapStateToProps = state => ({
	scrollTop: state.scrollTop,
	cart: state.cart,
	user: state.user,
});

export default connect(mapStateToProps)(Signup);
