import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce.js";
import CarouselHome from "./components/CarouselHome/CarouselHome";
import Products from "./components/Products/Products.js";
import Navigate from "./components/Navigate/Navigate.js";
import Footer from "./components/Footer/Footer.js";
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout";
import CategoryOptions from "./components/Categories/CategoryOptions/CategoryOptions";
import CMTscreen from "./components/Categories/CategoryOptions/CommercialTrucks/CMTscreen";
import RVscreen from "./components/Categories/CategoryOptions/RVCategory/RVscreen";
import CAscreen from "./components/Categories/CategoryOptions/ClassicAntique/CAscreen";
//import CategoryList from "./components/Categories/CategoryOptions/CategoryList.js";
import MiscScreen from "./components/Categories/CategoryOptions/Misc/MiscScreen";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartData, setCartData] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [taxesZone, setTaxesZone] = useState({});

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response && response.data);
  };

  ///////////////////////////////////////////////////////////
  const fetchCategories = async () => {
    const response = await commerce.categories.list();
    setCategories(response.data);
  };
  ///////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////
  // fetch by categories
  ///////////////////////////////////////////////////////////

  const fetchProductsByTrucks = async () => {
    const response = await commerce.products.list({
      category_slug: ["commercial-trucks"],
    });
    setProducts(response.data);
    console.log(response.data);
  };

  const fetchProductsByClassics = async () => {
    const response = await commerce.products.list({
      category_slug: ["classics"],
    });
    setProducts(response.data);
    console.log(response.data);
  };

  const fetchProductsByRvs = async () => {
    const response = await commerce.products.list({
      category_slug: ["rv"],
    });
    setProducts(response.data);
    console.log(response.data);
  };

  const fetchProductsByMisc = async () => {
    const response = await commerce.products.list({
      category_slug: ["misc"],
    });
    setProducts(response.data);
    console.log(response.data);
  };

  //////////////////////////////////////////////////////////

  const fetchCartData = async () => {
    const response = await commerce.cart.retrieve();
    setCartData(response);
  };

  useEffect(() => {
    fetchProducts();
    fetchCartData();
    fetchCategories();
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

  // empty/refresh cart after order confirmation order data and cart
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCartData(newCart);
  };

  // capturing the checkout
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const removeItemFromCart = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setCartData(response.cart);
  };

  //console.log("CART DATA =====> ", cartData);
  //console.log("SUB TOTAL ===> ", cartData.subtotal);
  console.log(products);
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
              {/* <CategoryList categories={categories} /> */}
              <CarouselHome />
              <CategoryOptions />
              {/* <Products products={products} addProduct={addProduct} /> */}
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
            <Checkout
              cartData={cartData}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              /* fetchTaxes={fetchTaxes} */
              error={errorMessage}
            />
          </Route>
          <Route path="/categories/commercial-trucks">
            <CMTscreen
              products={products}
              fetchProductsByTrucks={fetchProductsByTrucks}
              addProduct={addProduct}
            />
          </Route>
          <Route path="/categories/rv">
            <RVscreen
              products={products}
              fetchProductsByRvs={fetchProductsByRvs}
              addProduct={addProduct}
            />
          </Route>
          <Route path="/categories/classics">
            <CAscreen
              products={products}
              fetchProductsByClassics={fetchProductsByClassics}
              addProduct={addProduct}
            />
          </Route>
          <Route path="/categories/misc">
            <MiscScreen
              products={products}
              fetchProductsByMisc={fetchProductsByMisc}
              addProduct={addProduct}
            />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
