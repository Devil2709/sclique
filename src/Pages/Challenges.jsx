import React from "react";
import "../Styles/Challenges.css";
import BannerCard from "../Components/BannerCard";
import CodingImg from "../Images/CodingImg.jpeg";
import LogicalImg from "../Images/LogicalImg.jpeg";
import CSFundamentalImg from "../Images/CSFundamentalImg.jpeg";
import { List } from "@mui/joy";
import ChallengeCard from "../Components/ChallengeCard";
import CodeforcesLogo from "../Images/CodeforcesLogo.webp";
import CodechefLogo from "../Images/CodechefLogo.jpeg";
import LeetCodeLogo from "../Images/LeetCodeLogo.jpeg";
import AtCoderLogo from "../Images/AtCoderLogo.png";
import ContestCard from "../Components/ContestCard";

var ChallengesAr = [
  {
    title: "Coding Challenge",
    image: CodingImg,
    date: "08 June 2023",
    credit: 200,
  },
  {
    title: "Logical Reasoning Challenge",
    image: LogicalImg,
    date: "09 June 2023",
    credit: 100,
  },
  {
    title: "CS Fundamentals Challenge",
    image: CSFundamentalImg,
    date: "10 June 2023",
    credit: 80,
  },
];

var ContestAr = [
  {
    title: "Codeforces Round #874",
    image: CodeforcesLogo,
    date: "10 June 2023",
  },
  {
    title: "Codechef Starters #80",
    image: CodechefLogo,
    date: "09 June 2023",
  },
  {
    title: "LeetCode Biweekly",
    image: LeetCodeLogo,
    date: "10 June 2023",
  },
  {
    title: "Atcoder Beginner #875",
    image: AtCoderLogo,
    date: "11 June 2023",
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
      <h1 className="Challenges-header" align="left">
        Challenges
      </h1>
      <List
        orientation="horizontal"
        justifyContent="left"
        style={{ overflow: "auto", paddingBottom: "20px" }}
      >
        {(function (list, k) {
          for (let i = 0; i < k; i++) {
            list.push(
              <ChallengeCard
                title={ChallengesAr[i].title}
                image={ChallengesAr[i].image}
                date={ChallengesAr[i].date}
                credit={ChallengesAr[i].credit}
              />
            );
          }
          return list;
        })([], ChallengesAr.length)}
      </List>
      <h1 className="Contest-header" align="left" maginTop="40px">
        Upcoming Contests
      </h1>
      <List
        orientation="horizontal"
        justifyContent="left"
        style={{ overflow: "auto", paddingBottom: "20px" }}
      >
        {(function (list, k) {
          for (let i = 0; i < k; i++) {
            list.push(
              <ContestCard
                title={ContestAr[i].title}
                image={ContestAr[i].image}
                date={ContestAr[i].date}
                credit={ContestAr[i].credit}
              />
            );
          }
          return list;
        })([], ContestAr.length)}
      </List>
    </div>
  );
};

export default Challenges;
