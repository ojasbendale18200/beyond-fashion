import React from "react";
import "./LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function LandingPage() {
  return (
    <div className="landingPage">
      <h1 className="heading">Catch The Latest</h1>
      <div className="landingPage__latest">
        <img
          src="https://cdn.anscommerce.com/live/image/catalog/brandstore/columbia/col_accessories_tile_91522.jpg"
          alt=""
        />
        <img
          src="https://cdn.anscommerce.com/live/image/catalog/brandstore/columbia/col_baselayer_tile_91522.jpg"
          alt=""
        />
        <img
          src="https://cdn.anscommerce.com/live/image/catalog/brandstore/columbia/col_equipmenttile_91222.jpg"
          alt=""
        />
        <img
          src="https://cdn.anscommerce.com/live/image/catalog/brandstore/columbia/col_hikingtile_91222.jpg"
          alt=""
        />
      </div>
      <h1 className="heading">Best Seller</h1>
      <div className="landingPage__bestseller">
        <div className="landingPage__products">
          <img
            src="https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/Columbia/14-Oct-2022/WE5083_023_1.JPEG"
            alt=""
          />
          <p>Sportswear Men's Regular Jacket</p>
          <h2>$ 12000</h2>
        </div>
        <div className="landingPage__products">
          <img
            src="https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/Columbia/14-Oct-2022/WE3241_011_1.png"
            alt=""
          />
          <p>Mens Labyrinth Loop Jacket </p>
          <h2>$ 11990</h2>
        </div>
        <div className="landingPage__products">
          <img
            src="https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/Columbia/14-Oct-2022/WR7102_191_1.JPEG"
            alt=""
          />
          <p>Women's Arcadia II Jacket</p>
          <h2>$ 4299</h2>
        </div>
        <div className="landingPage__products">
          <img
            src="https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/Columbia/14-Oct-2022/BM1766_403_1.JPEG"
            alt=""
          />
          <p>Men's Flashback Windbreaker Shoes</p>
          <h2>$ 5999</h2>
        </div>
        <div className="landingPage__products">
          <img
            src="https://cdn.staticans.com/image/tr:e-sharpen-01,h-500,w-500,cm-pad_resize/data/Columbia/14-Oct-2022/WE0954_010_1.JPEG"
            alt=""
          />
          <p>mens Jacket</p>
          <h2>$ 9999</h2>
        </div>
      </div>

      <div className="landingPage__Add">
        <img
          src="https://cdn.anscommerce.com/tr:h-371,w-1349,cm-pad_resize/image/catalog/brandstore/columbia/columbia_dealsbanner_10422.jpg"
          alt=""
        />
      </div>

      <Container className="landingPage__videoAdd">
        <div class="ratio ratio-21x9">
          <iframe
            src="https://www.youtube.com/embed/Sg6ZFJlcr9E"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </Container>

      <div className="landingPage__Add">
        <img
          src="https://cdn.anscommerce.com/tr:h-371,w-1349,cm-pad_resize/image/catalog/brandstore/columbia/col_welcomegift_webbanner_91222.jpg"
          alt=""
        />
      </div>
      <h1 className="heading1">How do you Play?</h1>

      <div className="landingPage__play">
        <div>
          <img
            src="https://cdn.anscommerce.com/live/image/catalog/brandstore/Columbia/creatives/Camp-and-Safari.jpg"
            alt=""
          />
          <h2>Camp & Safari</h2>
        </div>
        <div>
          <img
            src="https://cdn.anscommerce.com/live/image/catalog/brandstore/Columbia/creatives/Hiking.jpg"
            alt=""
          />
          <h2>Hiking</h2>
        </div>
        <div>
          <img
            src="https://cdn.anscommerce.com/live/image/catalog/brandstore/Columbia/creatives/Lifestyle.jpg"
            alt=""
          />
          <h2>LifeStyle</h2>
        </div>
        <div>
          <img
            src="https://cdn.anscommerce.com/live/image/catalog/brandstore/Columbia/creatives/Running.jpg"
            alt=""
          />
          <h2>Running</h2>
        </div>
      </div>
      <h2 className="heading1">Our Associates</h2>

      <div className="landingPage__Associates">
        <div className="landingPage__Associates__card">
          <img
            src="https://cdn.anscommerce.com/live/image/catalog/brandstore/Columbia/creatives/Radhika_Sharma.jpg"
            alt=""
          />
          <div className="landingPage__Associates__cardName">
            <FaInstagram />
            <h5>@radhika_nomellers</h5>
          </div>
        </div>
        <div className="landingPage__Associates__card">
          <img
            src="https://cdn.anscommerce.com/live/image/catalog/brandstore/Columbia/creatives/Gaurav.jpg"
            alt=""
          />
          <div className="landingPage__Associates__cardName">
            <FaInstagram />
            <h5>@hippie_in_hills</h5>
          </div>
        </div>
        <div className="landingPage__Associates__card">
          <img
            src="https://cdn.anscommerce.com/live/image/catalog/brandstore/Columbia/creatives/Priyanka_Mohite.jpg"
            alt=""
          />
          <div className="landingPage__Associates__cardName">
            <FaInstagram />
            <h5>@priyankamohite11</h5>
          </div>
        </div>
        <div className="landingPage__Associates__card">
          <img
            src="https://cdn.anscommerce.com/live/image/catalog/brandstore/Columbia/creatives/Navaneeth_unnikrishnan.jpg"
            alt=""
          />
          <div className="landingPage__Associates__cardName">
            <FaInstagram />
            <h5>@mohit_chauhan</h5>
          </div>
        </div>
      </div>

      <div className="landingPage__Add">
        <img
          src="https://cdn.anscommerce.com/tr:h-371,w-1349,cm-pad_resize/image/catalog/brandstore/columbia/columbia_giftcardbanner_10422_new.jpg"
          alt=""
        />
      </div>

      <div className="landingPage__customercare">
        <div>
          <TbTruckReturn className="customer__icon" />
          <h4>Return & Cacellation</h4>
        </div>
        <div>
          <AiOutlineQuestionCircle className="customer__icon" />
          <h4>Customer Care</h4>
        </div>
        <div>
          <AiOutlineGift className="customer__icon" />
          <h4>Gift Cards</h4>
        </div>
        <div>
          <GoLocation className="customer__icon" />
          <h4>Find Store</h4>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
