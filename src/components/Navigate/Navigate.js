import { Navbar, Nav, Badge, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { commerce } from "../../lib/commerce";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navigate = ({ cartItems, totalCost }) => {
  // Category DropDown logic
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const { data } = await commerce.categories.list();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  console.log(cats);
  /////////////////////////////
  const location = useLocation();
  //console.log("CART ITEMS === ", cartItems);
  //console.log("TOTAL COST ===> ", totalCost);
  return (
    <Navbar className="my-2" bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            alt="Mid Eastern Chrome Stop"
            src="/resources/img/ME.png"
            style={{ height: "auto", width: "14rem" }}
            className="ml-3"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {location.pathname === "/cart" ? (
            <div>
              <h3 style={{ color: "white" }}>Total Cost: {totalCost}</h3>
            </div>
          ) : (
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart mr-3">
                  <Badge
                    className="px-1"
                    style={{
                      borderRadius: "50%",
                    }}
                    variant="light"
                  >
                    {cartItems}
                  </Badge>
                </i>
                Cart
              </Nav.Link>
            </LinkContainer>
          )}

          <LinkContainer to="/login">
            <Nav.Link>
              <i className="fa fa-user"></i>Sign In
            </Nav.Link>
          </LinkContainer>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            {cats.map((cat) => {
              return (
                <>
                  <LinkContainer to={`/categories/${cat.slug}`}>
                    <NavDropdown.Item> {cat.name}</NavDropdown.Item>
                  </LinkContainer>
                </>
              );
            })}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigate;
