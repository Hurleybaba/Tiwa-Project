import { NavLink } from "react-router-dom";
import LoginImage from "../Images/sign-up.webp";

export default function SignUp() {
  return (
    <section class="login-main-section">
      <section class="login-img-section signup-img-section">
        <img src={LoginImage} alt="" />
      </section>
      <section class="signup-container-section">
        <p class="welcome-textt">Welcome To Tiwamart</p>
        <p class="login-text">Create New Account</p>
        <div class="toggle-btn" tgbtn-signup>
          <p class="toggle-text toggle-text1">User</p>
          <p class="toggle-text toggle-text2">Vendor</p>
          <div class="toggle-ball user"></div>
        </div>
        <form action="">
          <input type="text" name="" id="" placeholder="First Name" />
          <input type="text" name="" id="" placeholder="Last Name" />
          <input type="email" name="" id="" placeholder="Email Address" />
          <input type="tel" name="" id="" placeholder="Phone Number" />
          <input type="date" name="" id="" placeholder="Date of Birth" />
          <input type="password" name="" id="" placeholder="Password" />

          <div class="agreement">
            <input type="checkbox" name="" id="" />
            <p>
              I agree to Tiwamart <a href="">Terms & Conditions</a>
            </p>
          </div>
          <input type="submit" value="Sign Up" />
          <hr />
          <div class="signing-up">
            <p class="dont-have">Already have an account?</p>
            <NavLink to="/login" className="sign-up-btn-toggle js-login-toggle">
              Log In
            </NavLink>
          </div>
        </form>
      </section>
    </section>
  );
}
