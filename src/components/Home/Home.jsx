import Product from "../Product/Product";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg"
          alt=""
        />
        <div className="home-row">
          <Product
            id="1"
            title="Lymio Women Top (526-576)"
            price={5}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61bWjc5N27L._AC_UL400_.jpg"
            }
          />

          <Product
            id="2"
            title="Amazon Brand - INKAST Men Casual Shirt"
            price={50}
            image={
              "https://m.media-amazon.com/images/I/71wE0MeLHOL._AC_UL400_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id="3"
            title="HILLSTAR Foldable Remote Control Drone with Dual Camera HD Wide Angle Lens Optical Flow Positioning with Dual 1800Mah Battery WiFi FPV 4-Axis Dual Camera with Dual Flash Lights With 2 Battries"
            price={48}
            image={
              "https://m.media-amazon.com/images/I/71zJGFtDddL._AC_UL400_.jpg"
            }
            rating={5}
          />
          <Product
            id="4"
            title="Rich Dad Poor Dad: 25th Anniversary Edit: (25th Anniversary Edition)"
            price={5}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY218_.jpg"
            }
          />
          <Product
            id="5"
            title="E-Furniture Mario Solid Wood Queen Size Upholstered Bed"
            price={250.88}
            image={
              "https://m.media-amazon.com/images/I/41-9EZpDfZL._AC_UL400_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home-row">
          {" "}
          <Product
            id="6"
            title="Acer ED320QR 31.5 Inch Full HD (1920x1080 Pixels) VA Panel Curved Gaming LCD Monitor with LED Backlight with 165Hz Refresh Rate AMD Free Sync and 2 X HDMI 1 X Display Port, Eye Care Features, Black"
            price={30}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/71ZWAzO-xsL._AC_UY218_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
