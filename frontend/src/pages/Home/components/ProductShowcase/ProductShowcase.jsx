import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductShowcase.css";

export const ProductShowcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1025, // Adjust this value based on your requirements
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 668, // Adjust this value based on your requirements
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716982749/openart-image_rTwiAfPv_1716980280287_raw_gmgyrf.jpg",
      linkUrl:
        "https://cones-and-stones.netlify.app/products/665879519c3e3eec9663ffb1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716972650/8-zuFquagtzwIqLbh_yez88h.png",
      linkUrl:
        "https://cones-and-stones.netlify.app/products/665849779c3e3eec961e12fe",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716975501/openart-image_lNHSzF8B_1716975209055_raw_elp0ms.jpg",
      linkUrl:
        "https://cones-and-stones.netlify.app/products/665876b89c3e3eec965a4b2a",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716975475/openart-image_CD-eAqhN_1716974003775_raw_glo0cv.jpg",
      linkUrl:
        "https://cones-and-stones.netlify.app/products/66586efd9c3e3eec962a7125",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/v1716982742/openart-image_NjTWTCDB_1716980211767_raw_kpgvmp.jpg",
      linkUrl:
        "https://cones-and-stones.netlify.app/products/665877c59c3e3eec966140a6",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dftguo4fa/image/upload/c_fill,ar_1:1,g_auto/v1716975476/openart-image_CpTkYdts_1716974741673_raw_ybgqhu.jpg",
      linkUrl:
        "https://cones-and-stones.netlify.app/products/66586ff69c3e3eec96317b12",
    },
  ];

  return (
    <div className="carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <a href={slide.linkUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
