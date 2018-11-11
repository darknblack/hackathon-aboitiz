import React, { Component, Fragment, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart, } from 'react-icons/fa';
import {
	IndexRedirect, Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { addClass, } from '../helper.js';
import logo from '../images/logo.png';


class Nav extends Component {
	componentDidMount() {
		console.log('<Nav />');
	}

	render() {
		const { scrollTop, cart, user, } = this.props;
		const changeNavbar = scrollTop >= 50;

		return (
			<Fragment>
				<div id="my-navbar" className="my-navbar-wrapper">
					<div className="container-fluid">
						<nav className="navbar navbar-expand-lg my-navbar-inner">
							<Link className="navbar-brand" to="/">
								<div id="logo" className={addClass(changeNavbar, 'logosmall')} alt="logo">
									<img src={logo} alt="" />
								</div>
							</Link>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>

							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<Link className="nav-link" to="/">Home</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/products">Products</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/cart">Cart</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/tracker">Tracker</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/login">Login</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/signup">Sign Up</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</Fragment>
		);
	}
}

Nav.propTypes = {
	scrollTop: PropTypes.number,
	cart: PropTypes.instanceOf(Array),
	user: PropTypes.string,
};

const mapStateToProps = state => ({
	scrollTop: state.scrollTop,
	cart: state.cart,
	user: state.user,
});

export default connect(mapStateToProps)(Nav);
