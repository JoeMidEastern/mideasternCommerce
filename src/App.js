import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
	//////////////////////////////////////////////
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
		console.log("PRODUCT:  ", products);
	};

	const fetchCart = async () => {
		const cart = commerce.cart.retrieve();
		setCart(cart);
	};

	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity);

		setCart(item.cart);
		console.log(cart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);

	//////////////////////////////////////////////
	return (
		<>
			<Navbar totalItems={cart.total_items} />
			<Products products={products} onAddToCart={handleAddToCart} />
		</>
	);
};

export default App;
