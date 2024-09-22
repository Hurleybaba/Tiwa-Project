export default function RightHeader2() {
  function handleEnter2() {
    document.getElementById("dropdown").classList.add("active");
  }
  function handleLeave2() {
    document.getElementById("dropdown").classList.remove("active");
  }
  return (
    <>
      <button className="help" id="helpBtn">
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
      <button className="accountt">
        My Account
        <i className="fa-solid fa-angle-down"></i>
        <div className="account-drop">
          <p className="greeting-user">Hi User</p>
          <p>
            <a href="dashboard.html">
              <i className="fa-regular fa-user"></i> My Profile
            </a>
          </p>
          <p>
            <a href="">
              <i className="fa-regular fa-bookmark"></i> My Orders
            </a>
          </p>
          <p>
            <a href="">
              <i className="fa-regular fa-heart"></i> My Saved Item
            </a>
          </p>
          <p>
            <a href="">
              <i className="fa-solid fa-wallet"></i> My Wallet
            </a>
          </p>
          <p>
            <a href="">
              <i className="fa-solid fa-location-dot"></i>Track My Order
            </a>
          </p>
          <p>
            <a href="">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              Logout
            </a>
          </p>
        </div>
      </button>
      <button className="header-cart js-cart">
        <i className="fa-solid fa-cart-shopping"></i>
        <p>My Cart</p>
        <span>0</span>
      </button>
    </>
  );
}
