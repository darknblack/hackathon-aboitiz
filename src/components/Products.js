import React, { Component, Fragment, } from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { FaShoppingCart, } from 'react-icons/fa';
import { bindActionCreators, } from 'redux';
import {
	IndexRedirect, Link, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { addClass, } from '../helper.js';
import flour1 from '../images/flour1.jpg';
import f1 from '../images/Wooden-Spoon-All-Purpose-Flour-155x200.png';
import f2 from '../images/Wooden-Spoon-Cake-Flour-155x200.png';
import f3 from '../images/Wooden-Spoon-Siopao-Flour-155x200.png';
import f4 from '../images/Wooden-Spoon-Whole-Wheat-Flour-155x200.png';
import { ADD_ITEM } from './Actions';


class Products extends Component {
	constructor(props) {
		super(props);
		this.flr1 = React.createRef();
		this.flr2 = React.createRef();
		this.flr3 = React.createRef();
		this.flr4 = React.createRef();

		this.addItem = this.addItem.bind(this);
	}


	addItem({ sku, qty, name }) {
		const quantity = parseInt(qty.current.value);

		const data = {
			sku,
			quantity,
			name,
		};

		this.props.ADD_ITEM(data);
		console.log(data);
	}

	render() {
		return (
			<Fragment>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col col-md-8">
							<h2 className="main-header">QUALITY SPECIAL FLOUR PRODUCTS</h2>
							<div className="products">

								<div className="product">
									<div className="row align-items-center">
										<div className="col col-4">
											<div className="product-image">
												<img src={f1} alt=""/>
											</div>
										</div>
										<div className="col col-8">
											<div className="product-info">
												<h2 className="product-header">WOODEN SPOON ALL-PURPOSE-FLOUR</h2>
												<ul>
													<li>Premium quality all purpose flour.</li>
													<li>Specially blended for moderate protein content.</li>
													<li>Suitable for all types of home baking.</li>
													<li>For batter-type cakes, steamed breads and various types of soft breads</li>
													<li>Highly recommended for baked products where whiteness is required.</li>
													<li>Fortified with Vitamin A and Iron.</li>
													<li>Moisture: not more than 14.0%</li>
													<li>Protein: not less than 11.0%</li>
													<li>Halal Certified</li>
												</ul>
												<a
													href="#"
													className="product-btn"
													onClick={() => this.addItem({ name: 'WOODEN SPOON ALL-PURPOSE-FLOUR', sku: 'flr001', qty: this.flr1 })}>
													ADD TO CART
												</a>
												<input
													ref={this.flr1}
													className="product-field"
													defaultValue={1}
													type="number"
													placeholder="1" />
											</div>
										</div>
									</div>
								</div>

								<div className="product">
									<div className="row align-items-center">
										<div className="col col-4">
											<div className="product-image">
												<img src={f2} alt=""/>
											</div>
										</div>
										<div className="col col-8">
											<div className="product-info">
												<h2 className="product-header">WOODEN SPOON CAKE FLOUR</h2>
												<ul>
													<li>Premium quality cake flour.</li>
													<li>Chlorinated to produce excellent volume of cake products.</li>
													<li>Suitable for most types of cakes.</li>
													<li>For angel food cakes, chiffon-type cakes and most types of high ratio cakes</li>
													<li>Fortified with Vitamin A and Iron.</li>
													<li>Moisture: not more than 13.5%</li>
													<li>Protein: not more than 8.0%</li>
													<li>Halal Certified</li>
												</ul>
												<a
													href="#"
													className="product-btn"
													onClick={() => this.addItem({ name: 'WOODEN SPOON CAKE FLOUR', sku: 'flr002', qty: this.flr2 })}>ADD TO CART</a>
												<input
													ref={this.flr2}
													className="product-field"
												 	type="number"
												 	defaultValue={1}
												 	placeholder="1" />
											</div>
										</div>
									</div>
								</div>

								<div className="product">
									<div className="row align-items-center">
										<div className="col col-4">
											<div className="product-image">
												<img src={f3} alt=""/>
											</div>
										</div>
										<div className="col col-8">
											<div className="product-info">
												<h2 className="product-header">WOODEN SPOON SIOPAO FLOUR</h2>
												<ul>
													<li>Premium quality siopao flour.</li>
													<li>Makes white and softer with fine surface texture.</li>
													<li>Fortified with Vitamin A and Iron.</li>
													<li>Moisture: not more than 14%</li>
													<li>Protein: not more than 10.9%</li>
													<li>Halal Certified</li>
												</ul>
												<a
													href="#"
													className="product-btn"
													onClick={() => this.addItem({ name: 'WOODEN SPOON SIOPAO FLOUR', sku: 'flr003', qty: this.flr3 })}>ADD TO CART</a>
												<input
													defaultValue={1}
													ref={this.flr3}
													className="product-field"
													type="number"
													placeholder="1" />
											</div>
										</div>
									</div>
								</div>

								<div className="product">
									<div className="row align-items-center">
										<div className="col col-4">
											<div className="product-image">
												<img src={f4} alt=""/>
											</div>
										</div>
										<div className="col col-8">
											<div className="product-info">
												<h2 className="product-header">WOODEN SPOON WHOLE WHEAT FLOUR</h2>
												<ul>
													<li>For full-bodied and full-flavored whole wheat bread.</li>
													<li>Contains all the natural vitamins and minerals from whole wheat.</li>
													<li>Fortified with Vitamin A and Iron</li>
													<li>Moisture: not more than 14.0%</li>
													<li>Protein: not less than 14.0%</li>
													<li>Halal Certified</li>
												</ul>
												<a
													href="#"
													className="product-btn"
													onClick={() => this.addItem({ name: 'WOODEN SPOON WHOLE WHEAT FLOUR', sku: 'flr004', qty: this.flr4 })}>ADD TO CART</a>
												<input
													defaultValue={1}
													ref={this.flr4}
													className="product-field"
													type="number"
													placeholder="1" />
											</div>
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

Products.propTypes = {
	// scrollTop: PropTypes.number,
	// cart: PropTypes.instanceOf(Array),
	// user: PropTypes.string,
};

const mapStateToProps = state => ({
	cart: state.cart,
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		ADD_ITEM,
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
