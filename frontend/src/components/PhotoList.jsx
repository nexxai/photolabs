import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => {
        return (
          <PhotoListItem
            photo={photo}
            key={photo.id}
            setLikedPhotos={props.setLikedPhotos}
            setShowModal={props.setShowModal}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
