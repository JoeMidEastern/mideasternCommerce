import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
	//////////////////////////////////////////////
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState();

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	const fetchCart = async () => {
		const cart = commerce.cart.retrieve();
		setCart(cart);
	};

	const handleAddToCart = async (productId, quantity) => {
		setCart(await commerce.cart.add(productId, quantity));
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);
	console.log("Cart State: ---> ", cart);
	console.log(cart);
	//////////////////////////////////////////////
	return (
		<>
			<Navbar />
			{/* <Cart cart={cart} /> */}
			<Products products={products} onAddToCart={handleAddToCart} />
		</>
	);
};

export default App;
