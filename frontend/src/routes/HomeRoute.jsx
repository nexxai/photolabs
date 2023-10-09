import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        getPhotosByTopic={props.getPhotosByTopic}
        topics={props.topics}
        likedPhotos={props.likedPhotos}
        clearTopic={props.clearTopic}
      />
      <PhotoList
        photos={props.photos}
        likedPhotos={props.likedPhotos}
        setLikedPhotos={props.setLikedPhotos}
        onShowModalClick={props.onShowModalClick}
      />
    </div>
  );
};

export default HomeRoute;
