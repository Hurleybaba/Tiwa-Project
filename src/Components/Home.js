import HomeSection1 from "./Home/HomeSection1";

import Image2 from "../Images/Main-slider/b2.webp";
import Image1 from "../Images/Main-slider/b1.webp";
import Image3 from "../Images/Main-slider/b3.webp";
import "../Styles/Home.css";
// import "../Styles/media.css";
import HomeSection2 from "./Home/HomeSection2";

const images = [Image1, Image2, Image3];
export default function Home({ product }) {
  return (
    <>
      <HomeSection1 imageProp={images} />
      <HomeSection2 product={product} />
    </>
  );
}
