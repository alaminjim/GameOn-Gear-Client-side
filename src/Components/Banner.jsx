import photo1 from "../assets/photo-variety-cricket-equipment-sports-store_1055425-58511.avif";
import photo2 from "../assets/sports-equipment-clothing-clean-white-background_670382-154596.jpg";
import photo3 from "../assets/stock-photo-etalase-sports-shop-room-generative-ai_925376-23477.jpg";
import photo4 from "../assets/bags-rack-store_107420-94851.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={photo1} />
      </div>
      <div>
        <img src={photo2} />
      </div>
      <div>
        <img src={photo3} />
      </div>
      <div>
        <img src={photo4} />
      </div>
    </Carousel>
  );
};

export default Banner;
