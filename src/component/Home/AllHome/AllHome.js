import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomePostSection from "../HomePostSection/HomePostSection";
import HomeTopPostSection from "../HomeTopPostSection/HomeTopPostSection";

const AllHome = () => {
  return (
    <div>
      <HomeBanner />
      <HomePostSection />
      <HomeTopPostSection />
    </div>
  );
};

export default AllHome;
