import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce.js";
import Products from "./components/Products/Products.js";
import Navigate from "./components/Navigate/Navigate.js";
import Footer from "./components/Footer/Footer.js";
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
	const [products, setProducts] = useState([]);
	const [cartData, setCartData] = useState({});

	const fetchProducts = async () => {
		const response = await commerce.products.list();
		setProducts(response && response.data);
	};

	const fetchCartData = async () => {
		const response = await commerce.cart.retrieve();
		setCartData(response);
	};

	useEffect(() => {
		fetchProducts();
		fetchCartData();
	}, []);
	//console.log("PRODUCTS === ", { products });

	//console.log("CART DATA === ", cartData);

	const addProduct = async (productId, quantity) => {
		const response = await commerce.cart.add(productId, quantity);
		setCartData(response.cart);
	};

	const updateProduct = async (productId, quantity) => {
		const response = await commerce.cart.update(productId, { quantity });
		setCartData(response.cart);
		//console.log("UPDATED ONE ===> ", cartData.line_items);
	};

	const handleEmptyCart = async () => {
		const response = await commerce.cart.empty();
		setCartData(response.cart);
	};

	const removeItemFromCart = async itemId => {
		const response = await commerce.cart.remove(itemId);
		setCartData(response.cart);
	};

	//console.log("CART DATA =====> ", cartData);
	//console.log("SUB TOTAL ===> ", cartData.subtotal);
	return (
		<Router>
			<div>
				<Navigate
					cartItems={cartData.total_items}
					totalCost={
						(cartData.subtotal && cartData.subtotal.formatted_with_symbol) ||
						"00.00"
					}
				/>
				<Switch>
					<Route exact path="/">
						<main className="main-container">
							<Products products={products} addProduct={addProduct} />
						</main>
					</Route>
					<Route exact path="/cart">
						<Cart
							cartData={cartData}
							updateProduct={updateProduct}
							handleEmptyCart={handleEmptyCart}
							removeItemFromCart={removeItemFromCart}
							totalCost={
								(cartData.subtotal &&
									cartData.subtotal.formatted_with_symbol) ||
								"00.00"
							}
						/>
					</Route>
					<Route exact path="/checkout">
						<Checkout />
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
};

export default App;
