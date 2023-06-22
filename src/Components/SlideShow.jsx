import React from "react";
import BannerCard from "./BannerCard";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = (props) => {
  const ChallengesAr = props.arr;

  return (
    <Slide
      slidesToShow={1}
      autoplay={true}
      arrows={false}
      duration={3000}
      transitionDuration={800}
    >
      {ChallengesAr.map((step, index) => (
        <BannerCard
          title={step.title}
          image={step.image}
          description={step.date}
          key={index}
        />
      ))}
    </Slide>
  );
};

export default SlideShow;
