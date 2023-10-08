import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} likedPhotos={props.likedPhotos} />
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
