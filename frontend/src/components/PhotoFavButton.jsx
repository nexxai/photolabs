import React, { useCallback, useState } from "react";
import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon";

function PhotoFavButton(props) {
  const [favorited, setFavorited] = useState(false);

  const favoritePhoto = function () {
    setFavorited(!favorited);

    props.setLikedPhotos((list) => {
      let newList = [...list];

      if (favorited) {
        newList = newList.filter((item) => item !== props.photo_id);
      } else {
        newList.push(props.photo_id);
      }

      return newList;
    });
  };

  return (
    <div className="photo-list__fav-icon" onClick={favoritePhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={
            favorited ||
            (props.likedPhotos && props.likedPhotos.includes(props.photo_id))
          }
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
