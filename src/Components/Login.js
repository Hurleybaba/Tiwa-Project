import LoginImage from "../Images/log-in.webp";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <section class="login-main-section">
      <section class="login-img-section">
        <img src={LoginImage} alt="" />
      </section>
      <section class="login-container-section">
        <form action="">
          <p class="welcome-textt">Welcome To Tiwamart</p>
          <p class="login-text">Log In Your Account</p>
          <input type="email" name="" id="" placeholder="Email Address" />
          <input type="password" name="" id="" placeholder="Password" />
          <div class="toggle-btn">
            <p class="toggle-text toggle-text1">User</p>
            <p class="toggle-text toggle-text2">Vendor</p>
            <div class="toggle-ball user"></div>
          </div>
          <div class="forget-anything">
            <label for="">
              <input type="checkbox" name="" id="" /> Remember me
            </label>
            <p class="forget-password">Forget Password?</p>
          </div>
          <input type="submit" value="Log In" />
        </form>
        <hr />
        <div class="signing-up">
          <p class="dont-have">Don't have an account?</p>
          <NavLink to="/signup" className="sign-up-btn-toggle js-signup-toggle">
            Sign Up
          </NavLink>
        </div>
      </section>
    </section>
  );
}
