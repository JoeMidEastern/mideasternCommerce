import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce.js";
import Products from "./components/Products/Products.js";
import Navigate from "./components/Navigate/Navigate.js";
import Footer from "./components/Footer/Footer.js";
import Cart from "./components/Cart/Cart.js";

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
	console.log("PRODUCTS === ", { products });

	console.log("CART DATA === ", cartData);

	const addProduct = async (productId, quantity) => {
		const response = await commerce.cart.add(productId, quantity);
		setCartData(response.cart);
	};

	return (
		<Router>
			<div>
				<Navigate cartItems={cartData.total_items} />
				<Switch>
					<Route exact path="/">
						<main className="main-container">
							<Products products={products} addProduct={addProduct} />
						</main>
					</Route>
				</Switch>
				<Cart cartData={cartData} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
