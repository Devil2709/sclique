import { useTheme } from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import BannerCard from "./BannerCard";
import { autoPlay } from "react-swipeable-views-utils";

const AutoSwipeView = (props) => {
  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const ChallengesAr = props.arr;

  return (
    <AutoPlaySwipeableViews
      containerStyle={{
        transition: "transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s",
      }}
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {ChallengesAr.map((step, index) => (
        <div key={step.title}>
          {console.log(step.title)}
          {Math.abs(activeStep - index) <= 4 ? (
            <BannerCard
              title={step.title}
              image={step.image}
              description={step.date}
            />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default AutoSwipeView;
