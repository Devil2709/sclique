import React from "react";
import "../Styles/Challenges.css";
import BannerCard from "../Components/BannerCard";
import CodingImg from "../Images/CodingImg.jpeg";
import LogicalImg from "../Images/LogicalImg.jpeg";
import CSFundamentalImg from "../Images/CSFundamentalImg.jpeg";
import { List } from "@mui/joy";
import ChallengeCards from "../Components/ChallengeCard";

var ObjAr = [
  {
    title: "Coding Challenge",
    image: CodingImg,
    description: "08 June 2023",
    credit: 200,
  },
  {
    title: "Logical Reasoning Challenge",
    image: LogicalImg,
    description: "09 June 2023",
    credit: 100,
  },
  {
    title: "CS Fundamentals Challenge",
    image: CSFundamentalImg,
    description: "10 June 2023",
    credit: 80,
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
          for (let i = 0; i < k; i++) {
            list.push(
              <ChallengeCards
                title={ObjAr[i].title}
                image={ObjAr[i].image}
                description={ObjAr[i].description}
                credit={ObjAr[i].credit}
              />
            );
          }
          return list;
        })([], ObjAr.length)}
      </List>
    </div>
  );
};

export default Challenges;
