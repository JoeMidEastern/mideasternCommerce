import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { commerce } from "../../lib/commerce";

const Review = ({ checkoutToken }) => {
  const [liveObj, setLiveObj] = useState({});
  const [taxingZone, setTaxingZone] = useState({});

  const fetchLiveoject = async (checkoutTokenId) => {
    const response = await commerce.checkout.getLive(checkoutTokenId);
    setLiveObj(response);
  };
  useEffect(() => {
    fetchLiveoject(checkoutToken.id);
  }, []);

  const fetchTaxes = async (checkoutTokenId, obj) => {
    const response = await commerce.checkout.setTaxZone(checkoutTokenId, obj);
    setTaxingZone(response);
    /*
    if (obj) {

    }
    */
  };
  useEffect(() => {
    fetchTaxes(checkoutToken.id, {
      country: "US",
      region: "SC",
      postal_zip_code: "29102",
    });
  }, []);

  //console.log("checkoutToken", checkoutToken.live.line_items);
  console.log("live", liveObj);
  console.log(checkoutToken);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>

      <List disabledPadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Qty: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: "700" }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
