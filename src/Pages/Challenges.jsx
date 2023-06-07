import React from "react";
import "../Styles/Challenges.css";
import LongCard from "../Components/LongCard";
import BannerCard from "../Components/BannerCards";
import CodingImg from "../Images/CodingImg.png";
import LogicalImg from "../Images/LogicalImg.jpeg";
import { List } from "@mui/joy";

var ObjAr = [
  {
    title: "Coding Challenge",
    image: CodingImg,
    description:
      "Write a program to solve the given problem and earn loads of credit.",
  },
  {
    title: "Logical Reasoning Challenge",
    image: LogicalImg,
    description: "Solve interesting logical problems as fast as you can.",
  },
];

const Challenges = () => {
  return (
    <div className="Back">
      <BannerCard
        title={"Coding Challenge"}
        image={CodingImg}
        description="Write a program to solve the given problem and earn loads of credit."
      />
      <h1 align="left" margin-left="100">
        Challenges
      </h1>
      <List
        orientation="horizontal"
        justifyContent="left"
        style={{ overflow: "auto" }}
      >
        {(function (list, k) {
          for (let i = 0; i < 2; i++) {
            list.push(
              <LongCard
                title={ObjAr[i].title}
                image={ObjAr[i].image}
                description={ObjAr[i].description}
              />
            );
          }
          return list;
        })([], 2)}
      </List>
    </div>
  );
};

export default Challenges;
