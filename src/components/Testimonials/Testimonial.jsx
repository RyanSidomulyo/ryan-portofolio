import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Taylor Otwell is the founder of Laravel, LLC. Otwell is arguably the pioneer of open source-based development, and he provides a lot of evidence that the concept of open source doesn't have to be non-profit. Laravel is one of his creations, and it is still the most popular PHP web framework. ",
    },
    {
      img: profilePic2,
      review:
        "The figure of van Rossum himself is quite different when compared to Taylor Otwell. Van Rossum tends to be more introverted and also seems to be less socially popular than Otwell. But van Rossum is a pioneer of the Python programming language. Python is one of my favorite languages. Again, this is due to the elegant syntax and easy-to-learn semantics.",
    },
    {
      img: profilePic3,
      review:
        "Mr. above is 95% of the reasons why I became a software engineer. Mr. Galih himself, as far as I know, is not a software engineer with experience in industrial-level projects. His background is academic, if I'm not mistaken a lecturer at Pasundan University. He has a YouTube channel which I think was originally made to help him in his teaching duties.",
    },
    {
      img: profilePic4,
      review:
        "Actually, I wanted to study computer science or informatics engineering, but it was expensive. In the end, I chose to major in mathematics education. After a long time of work, there is a desire to learn something new. Well, it was the figure of a tattooed woman named Amanda Shantika who inspired me to make the choice to study programming.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My Role Model...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
