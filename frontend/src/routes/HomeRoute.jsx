import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

import photos from "mocks/photos";
import topics from "mocks/topics";

const HomeRoute = (props) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos} />
      <PhotoList
        photos={photos}
        setLikedPhotos={setLikedPhotos}
        setShowModal={props.setShowModal}
      />
    </div>
  );
};

export default HomeRoute;
