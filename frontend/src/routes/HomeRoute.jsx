import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import photos from "mocks/photos";
import topics from "mocks/topics";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={props.likedPhotos} />
      <PhotoList
        photos={photos}
        likedPhotos={props.likedPhotos}
        setLikedPhotos={props.setLikedPhotos}
        onShowModalClick={props.onShowModalClick}
      />
    </div>
  );
};

export default HomeRoute;
