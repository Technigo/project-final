import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../../../../common/ReusableComponents/Image/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductShowcase.css";

export const ProductShowcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: "665879519c3e3eec9663ffb1",
      productName: "Emerald green sunbeam sunglasses",
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716982749/openart-image_rTwiAfPv_1716980280287_raw_gmgyrf.jpg",
    },
    {
      id: "665849779c3e3eec961e12fe",
      productName: "Pink paradise tee",
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716972650/8-zuFquagtzwIqLbh_yez88h.png",
    },
    {
      id: "665876b89c3e3eec965a4b2a",
      productName: "Sunshine yellow bliss dress",
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716975501/openart-image_lNHSzF8B_1716975209055_raw_elp0ms.jpg",
    },
    {
      id: "66586efd9c3e3eec962a7125",
      productName: "Black denim dream jeans",
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716975475/openart-image_CD-eAqhN_1716974003775_raw_glo0cv.jpg",
    },
    {
      id: "665877c59c3e3eec966140a6",
      productName: "Sky blue sunburst sunglasses",
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716982742/openart-image_NjTWTCDB_1716980211767_raw_kpgvmp.jpg",
    },
    {
      id: "66586ff69c3e3eec96317b12",
      productName: "Blue and pink color splash cap",
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/c_fill,ar_1:1,g_auto/v1716975476/openart-image_CpTkYdts_1716974741673_raw_ybgqhu.jpg",
    },
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Link to={`/products/${slide.id}`}>
              <Image
                className="slide"
                src={slide.imageUrl}
                alt={slide.productName}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
