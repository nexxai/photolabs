import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        getPhotosByTopic={props.getPhotosByTopic}
        topics={props.state.topics}
        likedPhotos={props.state.likedPhotos}
        clearTopic={props.clearTopic}
        state={props.state}
        search={props.search}
      />
      <PhotoList
        photos={props.state.photos}
        likedPhotos={props.state.likedPhotos}
        setLikedPhotos={props.setLikedPhotos}
        onShowModalClick={props.onShowModalClick}
      />
    </div>
  );
};

export default HomeRoute;
