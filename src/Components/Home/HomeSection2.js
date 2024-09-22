import Advert from "./Advert";
import Delivery from "./Delivery";
import Logo from "./Logo";
import Today from "./Today";

const arr1 = {
  title: "Today's Deals",
  more: "See All Items",
};
const arr2 = {
  title: "Recommended for you",
  more: "See All Items",
};
export default function HomeSection2() {
  return (
    <section className="section2">
      <Today myTitle={arr1} />
      <Delivery />
      <Logo />
      <Today myTitle={arr2} />
      <Advert />
      <section className="last-section">
        <div>
          <div className="img-box"></div>
          <div className="img-box-details">
            <p className="p100">home furnishings</p>
            <p className="p200">Get Up to 70% Off</p>
            <p className="p300">
              show now <i class="fa-solid fa-angle-right"></i>
            </p>
          </div>
        </div>
        <div>
          <div className="img-box2"></div>
          <div className="img-box-details">
            <p className="p100">fitness tools & equipment</p>
            <p className="p200">Get Fitness Equipment At Amazing Discounts!</p>
            <p className="p300">
              show now <i class="fa-solid fa-angle-right"></i>
            </p>
          </div>
        </div>
        <div>
          <div className="img-box3"></div>
          <div className="img-box-details">
            <p className="p100">kids wears & accessories</p>
            <p className="p200">Get All Kiddies Products At Huge Discounts!</p>
            <p className="p300">
              show now <i class="fa-solid fa-angle-right"></i>
            </p>
          </div>
        </div>
        <div>
          <div className="img-box4"></div>
          <div className="img-box-details">
            <p className="p100">top deals on televisions</p>
            <p className="p200">Get the TV You Want With Bargain Deals!</p>
            <p className="p300">
              show now <i class="fa-solid fa-angle-right"></i>
            </p>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="contact-box">
          <div className="note">
            <p className="p400">Join Our Newsletter and Get</p>
            <p className="p500">Update on our productsand services</p>
            <div className="input">
              <i class="fa-regular fa-envelope"></i>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
              />
              <button>
                Subscribe <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
