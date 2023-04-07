import React from "react";
import Slider from "react-slick";

import avt01 from "../../assets/images/ava-1.jpg";
import avt02 from "../../assets/images/ava-2.jpg";
import avt03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquam, hic tempora
          inventore suscipit unde.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={avt01} alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquam, hic tempora
          inventore suscipit unde.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={avt02} alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquam, hic tempora
          inventore suscipit unde.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={avt03} alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquam, hic tempora
          inventore suscipit unde.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img className="w-25 h-25 rounded-2" src={avt01} alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
