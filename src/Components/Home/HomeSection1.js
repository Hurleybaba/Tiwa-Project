import HomeNav from "./HomeNav";

export default function HomeSection1({ imageProp }) {
  const [Image1, Image2, Image3] = imageProp;
  return (
    <>
      <section className="section1">
        <div className="main-img">
          <swiper-container
            class="mySwiper left"
            pagination="true"
            pagination-clickable="true"
            space-between="30"
            loop="true"
            autoplay-delay="7500"
            effect="fade"
            autoplay-disable-on-interaction="false"
          >
            <swiper-slide class="swipe1">
              <img src={Image1} alt="" />
            </swiper-slide>
            <swiper-slide class="swipe2">
              <img src={Image2} alt="" />
            </swiper-slide>
            <swiper-slide class="swipe3">
              <img src={Image3} alt="" />
            </swiper-slide>
          </swiper-container>
          <div className="right">
            <div className="in-right right1"></div>
            <div className="in-right right2"></div>
            <div className="in-right right3"></div>
            <div className="in-right right4"></div>
          </div>
        </div>
        <HomeNav />
      </section>
    </>
  );
}
