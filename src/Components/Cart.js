import { NavLink } from "react-router-dom";
import CartItem1 from "./Cart/CartItem1";
import CartItem2 from "./Cart/CartItem2";
import "../Styles/cart.css";
import "../Styles/cartmedia.css";
import { useContext } from "react";
import { CartContext, CartListContext } from "../App";
import Orderplaced from "./Orderplaced";

export default function Cart() {
  const { cartNo, setCartNo } = useContext(CartContext);

  const { cartList, setCartList } = useContext(CartListContext);

  let totalPrice = null;
  let totalQt = null;
  cartList.forEach((item) => {
    totalPrice += item.priceNGN;
    totalQt += item.qt;
  });
  return (
    <>
      <section class="cart-heading">
        <div class="arrow-back">
          <NavLink to="/">
            <i class="fa-solid fa-arrow-left"></i>
          </NavLink>
          <div>
            <img src="Images/Tiwa Logos/logo3.png" alt="" />
          </div>
        </div>
        <div class="breadcrumb">
          <NavLink to="/home">
            <i class="fa-solid fa-house"></i>
          </NavLink>
          <i class="fa-solid fa-angle-right"></i>
          <a class="breadcrumb-focus">Shopping Cart</a>
        </div>
        <h1 class="breadh1">Shopping Cart</h1>
        <div class="subtotal">
          <p>Subtotal ( 4 Items )</p>
          <p>₦1,300,300</p>
        </div>
      </section>
      <section class="conti">
        <button class="continue-shopping js-continie-to-shop">
          <i class="fa-solid fa-arrow-left"></i> Continue Shopping
        </button>
      </section>
      <section class="large">
        <section className="cart-items-container js-cart-container">
          <CartItem1 />
        </section>
        <section className="cart-items-container2">
          <CartItem2 />
        </section>
        <section class="payout">
          <div class="order-summary">
            <p>Order Summary</p>
            <p>{cartNo} Items</p>
          </div>
          <div class="delivery-charges">
            <p>Delivery Charges:</p>
            <p>₦2000</p>
          </div>
          <div class="subtotal">
            <p>Subtotal:</p>
            <p>₦{totalPrice}</p>
          </div>
          <div class="total">
            <p>Total</p>
            <p>₦{totalPrice + 2000}</p>
          </div>
          <div class="charges">
            <p>Excluding delivery charges</p>
          </div>
          <div class="continue-checkout">
            <Orderplaced />
          </div>
          <div class="payment-cards">
            <div class="div1">
              We accept:
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/mastercard.png"
                alt=""
              />
              <img
                class="pay-img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_100,f_auto,fl_lossy,dpr_1.0,q_auto/assets/images/content/visacard.png"
                alt="Visa"
              />
              <img
                class="pay-img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_100,f_auto,fl_lossy,dpr_1.0,q_auto/assets/images/content/vervecard.png"
                alt="Verve"
              />
              <img
                class="pay-img"
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_100,f_auto,fl_lossy,dpr_1.0,q_auto/assets/images/content/KongaPay.png"
                alt="KongaPay"
              />
            </div>
            <div class="div2">
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/secure.png"
                alt=""
              />
              Transactions are 100% Safe and Secure
            </div>
          </div>
        </section>
      </section>
      <div className="payment-cards">
        <div className="div1">
          We accept:
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/mastercard.png"
            alt=""
          />
          <img
            className="pay-img"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_100,f_auto,fl_lossy,dpr_1.0,q_auto/assets/images/content/visacard.png"
            alt="Visa"
          />
          <img
            className="pay-img"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_100,f_auto,fl_lossy,dpr_1.0,q_auto/assets/images/content/vervecard.png"
            alt="Verve"
          />
          <img
            className="pay-img"
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_100,f_auto,fl_lossy,dpr_1.0,q_auto/assets/images/content/KongaPay.png"
            alt="KongaPay"
          />
        </div>
        <div className="div2">
          <img
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/secure.png"
            alt=""
          />
          Transactions are 100% Safe and Secure
        </div>
        <div className="continue-checkout continue-absolutee">
          <button>Continue to Checkout</button>
        </div>
      </div>
    </>
  );
}
