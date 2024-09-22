import { NavLink } from "react-router-dom";

export default function RightHeader1() {
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
      <NavLink to="/cart">
        <button className="header-cart js-cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>My Cart</p>
          <span>0</span>
        </button>
      </NavLink>
    </>
  );
}
