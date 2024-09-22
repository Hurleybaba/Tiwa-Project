import "../Styles/Header.css";
import Logo from "../Images/Tiwa Logos/logo3.png";
import RightHeader1 from "./Header/RightHeader1";
import RightHeader2 from "./Header/RightHeader2";

function handleHome() {
  window.location.pathname = "./home";
}

function Header({ isLogin }) {
  return (
    <header>
      <div className="top-header">
        <div className="logo">
          <a onClick={handleHome} id="customA-1">
            <img src={Logo} alt="" />
          </a>
          <button className="header-icons">
            <a href="login.html?content=in">
              <i class="fa-solid fa-user"></i>
            </a>
            <i class="fa-solid fa-bars"> </i>
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div className="category-menu category-menu2">
            <div className="flex">
              <div className="greyy-box"></div>
              <div className="other-box other-box10"></div>
              <div className="other-box other-box20"></div>
              <div className="other-box other-box30"></div>
              <div className="other-box other-box40"></div>
              <div className="other-box other-box50"></div>
              <div className="other-box other-box60"></div>
              <div className="other-box other-box70"></div>
              <div className="other-box other-box80"></div>
            </div>
          </div>
        </div>
        <div className="search">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for products, brands and categories...
        "
          />
          <div className="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="right-header js-right-header">
          {isLogin ? <RightHeader2 /> : <RightHeader1 />}
        </div>
      </div>
      <div className="bottom-header">
        <ul>
          <div className="drop-1">
            <li className="lists MVPlist">
              All Categories <i className="fa-solid fa-caret-down"></i>
            </li>
            <div className="category-menu">
              <div className="flex">
                <div className="grey-box"></div>
                <div className="other-box other-box1"></div>
                <div className="other-box other-box2"></div>
                <div className="other-box other-box3"></div>
                <div className="other-box other-box4"></div>
                <div className="other-box other-box5"></div>
                <div className="other-box other-box6"></div>
                <div className="other-box other-box7"></div>
                <div className="other-box other-box8"></div>
              </div>
            </div>
          </div>
          <div className="drop-2">
            <li className="lists list2">
              Computers and Accessories
              <div className="another-box another-box1"></div>
            </li>
          </div>
          <div className="drop-3">
            <li className="lists list3">
              Phones and Tablets
              <div className="another-box another-box2"></div>
            </li>
          </div>
          <div className="drop-4">
            <li className="lists list4">
              Electronics
              <div className="another-box another-box3"></div>
            </li>
          </div>
          <div className="drop-5">
            <li className="lists list5">
              Tiwa Fashion
              <div className="another-box another-box4"></div>
            </li>
          </div>
          <div className="drop-6">
            <li className="lists list6">
              Home and Kitchen
              <div className="another-box another-box5"></div>
            </li>
          </div>
          <div className="drop-7">
            <li className="lists list7">
              Baby, Kids and Toys
              <div className="another-box another-box6"></div>
            </li>
          </div>
          <div className="drop-8">
            <li className="lists list8">
              Other Categories
              <div className="another-box another-box7"></div>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
