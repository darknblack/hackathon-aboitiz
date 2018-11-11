import React, { Component, Fragment, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart, } from 'react-icons/fa';
import { bindActionCreators, } from 'redux';
import {
	IndexRedirect, Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import QRCode from 'qrcode.react';
import { addClass, } from '../helper.js';
import flour1 from '../images/flour1.jpg';
import f1 from '../images/Wooden-Spoon-All-Purpose-Flour-155x200.png';
import f2 from '../images/Wooden-Spoon-Cake-Flour-155x200.png';
import f3 from '../images/Wooden-Spoon-Siopao-Flour-155x200.png';
import f4 from '../images/Wooden-Spoon-Whole-Wheat-Flour-155x200.png';
import { CART_CLEAR, ADD_ORDER } from './Actions';


class Cart extends Component {
	constructor(props) {
		super(props);
		this.onMakeOrder = this.onMakeOrder.bind(this);
		this.onClear = this.onClear.bind(this);
		this.state = {
			qr: false,
			qrvalue: '',
		};
	}

	generateImage(sku) {
		if(sku == 'flr001')
			return f1;
		if(sku == 'flr002')
			return f2;
		if(sku == 'flr003')
			return f3;
		if(sku == 'flr004')
			return f4;
	}

	onClear() {
		const response = confirm("Are you sure you want to clear your cart?");

		if(response)
			this.props.CART_CLEAR();
	}

	onMakeOrder() {
		const response = confirm("Are you sure you want to clear your cart?");

		if(!response || this.props.cart.length == 0)
			return;

		this.setState({
			qr: true,
			qrvalue: this.props.cart,
		});

		this.props.ADD_ORDER(this.props.cart, this.props.order.length);
	}

	render() {
		const { cart } = this.props;

		return (
			<Fragment>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col col-md-8">
							<h2 className="main-header">SHOW CART</h2>
							<div className="cart">
								<table className="table table-bordered">
									<tr>
										<th>#</th>
										<th>Name</th>
										<th>Qty</th>
									</tr>
									{cart.map((item, key) => {
										return (
											<tr key={key}>
												<td>{key + 1}</td>
												<td><img style={{width: '40px'}} src={this.generateImage(item.sku)} alt=""/>{item.name}</td>
												<td>{item.quantity}</td>
											</tr>
										);
									})}
								</table>
								<div style={{float: 'right'}}>
									<button onClick={this.onClear} className="product-btn" style={{ backgroundColor: 'orange' }}>Clear cart</button>
									<button onClick={this.onMakeOrder} href="#" className="product-btn">Order</button>
								</div>
							</div>
							{ console.log(this.state.qrvalue) }
							{ this.state.qr ?
								<Fragment>
									<QRCode value={JSON.stringify(this.state.qrvalue)} />
									<p>Congratulations you have succesfully ordered</p>
								</Fragment> : ''
							}
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

Cart.propTypes = {
	CART_CLEAR: PropTypes.func,
	ADD_ORDER: PropTypes.func,
	cart: PropTypes.instanceOf(Array),
	order: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
	cart: state.cart,
	order: state.order,
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		CART_CLEAR,
		ADD_ORDER,
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
