import { useContext } from "react";
import { CartContext } from "../../App";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RightHeader1() {
  const [cartList, setCartList] = useState([]);
  const { cartNo, setCartNo } = useContext(CartContext);

  useEffect(() => {
    const savedCartList = sessionStorage.getItem("cartList");
    if (savedCartList) {
      setCartList(JSON.parse(savedCartList));
    }
  }, []);

  function handleEnter1() {
    document.getElementById("dropdown").classList.add("active");
  }
  function handleLeave1() {
    document.getElementById("dropdown").classList.remove("active");
  }
  function handleEnter2() {
    document.querySelector(".login-drop").classList.add("active");
  }
  function handleLeave2() {
    document.querySelector(".login-drop").classList.remove("active");
  }

  return (
    <>
      <button
        className="help"
        id="helpBtn"
        onMouseEnter={handleEnter1}
        onMouseLeave={handleLeave1}
      >
        <i className="fa-solid fa-question"></i>
        <p>Help</p>
        <i className="fa-solid fa-angle-down"></i>
        <div className="help-drop" id="dropdown">
          <a href="">FAQs</a>
          <a href="">Contact Us</a>
          <a href="">Track My Order</a>
          <a href="">Return Policy</a>
        </div>
      </button>
      <button
        className="login"
        onMouseEnter={handleEnter2}
        onMouseLeave={handleLeave2}
      >
        Login
        <div className="login-drop">
          <NavLink
            to="/login"
            className="login-btns js-login-btns"
            onClick={handleLeave2}
          >
            Login <i className="fa-solid fa-right-to-bracket"></i>
          </NavLink>
          <NavLink
            to="/signup"
            className="login-btns js-signup-btns"
            onClick={handleLeave2}
          >
            Sign Up <i className="fa-solid fa-user-plus"></i>
          </NavLink>
        </div>
      </button>
      <NavLink to="/cart" style={{ textDecoration: "none" }}>
        <button className="header-cart js-cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>My Cart</p>
          <span>{cartNo}</span>
        </button>
      </NavLink>
    </>
  );
}
