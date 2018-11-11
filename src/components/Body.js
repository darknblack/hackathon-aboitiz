import { connect, } from 'react-redux';
import { bindActionCreators, } from 'redux';
import {
	BrowserRouter as Router, Route, Link, IndexRedirect, Switch, Redirect
} from 'react-router-dom';
import React, { Component, Fragment, } from 'react';
import PropTypes from 'prop-types';
import firebase, { auth, provider, } from '../../config/firebase.js';
import {
	getScrollPosition,
	getWindowHeight,
	getWindowWidth,
} from '../helper';
import Nav from './Nav';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Products from './Products';
import Cart from './Cart';
import Tracker from './Tracker';
import TrackerDetails from './TrackerDetails';

import RMIssuance from './_rmIssuance';
import Production from './_production';
import ProductionPlanning from './_ProductionPlanning';
import FGReceiving from './_fgReceiving';

import Index from './superadmin/Index';
import CreateAccount from './superadmin/CreateAccount';

import {
	LOG_IN,
	LOG_OUT,
	WINDOW_RESIZE,
	WINDOW_SCROLL,
} from './Actions';


class Body extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Fragment>
					<Nav />
					<Switch>
						<Route exact path="/" component={ProductionPlanning} />
						<Route exact path="/production-planning" comopnent={ProductionPlanning} />
						<Route exact path="/rm-issuance" comopnent={RMIssuance} />
						<Route exact path="/production" comopnent={Production} />
						<Route exact path="/fg-receiving" comopnent={FGReceiving} />
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/tracker" component={Tracker} />
						<Route exact path="/tracker/:id" component={TrackerDetails} />
						<Route exact path="/products" component={Products} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/create-account" component={CreateAccount} />
						<Route exact path="/accounts-list" component={Index} />
						<Redirect to="/" />
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

Body.propTypes = {
	// user: PropTypes.string,
	// windowWidth: PropTypes.number,
	WINDOW_RESIZE: PropTypes.func,
	WINDOW_SCROLL: PropTypes.func,
	// LOG_OUT: PropTypes.func,
};

const mapStateToProps = state => ({
	user: state.user,
	// scrollTop: state.scrollTop,
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		WINDOW_RESIZE,
		WINDOW_SCROLL,
		LOG_IN,
		LOG_OUT,
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Body);
