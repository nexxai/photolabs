import React, { useCallback, useState } from "react";
import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon";

function PhotoFavButton() {
  const [favorited, setFavorited] = useState(false);

  const favoritePhoto = function () {
    console.log("favoriting");
    setFavorited(!favorited);
  };

  return (
    <div className="photo-list__fav-icon" onClick={favoritePhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
