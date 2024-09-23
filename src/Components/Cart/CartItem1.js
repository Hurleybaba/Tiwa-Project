// import { products } from "../../Utilities/ProductsArr";
import { useContext, useEffect, useState } from "react";
import { CartListContext } from "../../App";

export default function CartItem1() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const savedCartList = sessionStorage.getItem("cartList");
    if (savedCartList) {
      setCartList(JSON.parse(savedCartList));
    }
  }, []);
  return (
    <>
      <div class="cart-items-top">
        <p>Item Details</p>
        <p>Quantity</p>
        <p>Item Price</p>
        <p>Action</p>
      </div>
      {cartList.length > 0 ? (
        cartList.map((product) => {
          return (
            <div class="cart-item js-cart-item-box">
              <div class="cart-item-profile">
                <div class="cart-img">
                  <img src={product.img} alt="" />
                </div>
                <div class="cart-item-description">
                  <p>${product.name}</p>
                  <p>
                    Sold by <span>Maxi Official Store</span>
                  </p>
                </div>
              </div>
              <div class="cart-quantity">
                <div class="button-wrapper">
                  <button class="decrease js-decrease">-</button>
                  <p class="js-show">{product.qt}</p>
                  <button class="increase js-increase">+</button>
                </div>
              </div>
              <div class="cart-item-price">
                <p class="cart-item-final-price js-final-price">
                  ₦{(product.priceNGN * product.qt).toLocaleString()}
                </p>
                <p class="cart-item-calculations js-calculations">
                  ₦{product.price} x {product.qt} Items
                </p>
              </div>
              <div class="cart-item-buttons">
                <button class="cart-item-remove js-cart-item-remove">
                  Remove item
                </button>
                <button class="cart-item-save js-cart-item-save">
                  Save for Later
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Your Cart is empty</p>
      )}
    </>
  );
}
