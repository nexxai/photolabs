import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import photos from "mocks/photos";
import topics from "mocks/topics";

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
