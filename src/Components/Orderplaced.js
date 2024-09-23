import React from "react";
import "../Styles/orderplaced.css";
import { useContext, useState } from "react";
import { CartListContext } from "../App";
import { CartContext } from "../App";

// import "bootstrap/dist/css/bootstrap.min.css";

function handleClick(event) {
  event.stopPropagation();
  document.querySelector(".popup-div").classList.add("active");

  window.addEventListener("click", () => {
    document.querySelector(".popup-div").classList.remove("active");
  });
}

const Orderplaced = () => {
  const { cartNo, setCartNo } = useContext(CartContext);
  const { cartList, setCartList } = useContext(CartListContext);

  function handleQuit() {
    document.querySelector(".popup-div").classList.remove("active");

    sessionStorage.removeItem(cartNo);
    sessionStorage.removeItem(cartList);
    setCartNo(0);
    setCartList([]);
    window.location.pathname = "/";
  }
  return (
    <>
      <button id="popup-btn" onClick={handleClick}>
        Go to checkout
      </button>
      <div class="popup-div">
        <div class="title">Checkout Order</div>

        <div class="popup-div-texts">
          <i class="fa-regular fa-face-smile-wink"></i>
          You've successfully placed an order
        </div>

        <div class="quitPopUp">
          <button onClick={handleQuit}>Quit</button>
        </div>
      </div>
    </>
  );
};

export default Orderplaced;
