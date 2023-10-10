import React, { useCallback, useState } from "react";
import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon";

function PhotoFavButton(props) {
  const favoritePhoto = function () {
    props.setLikedPhotos(props.photo_id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={favoritePhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.likedPhotos.includes(props.photo_id)} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
