import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <article className="photo-list__item">
      <section>
        <PhotoFavButton
          className="photo-list__fav-icon"
          likedPhotos={props.likedPhotos}
          setLikedPhotos={props.setLikedPhotos}
          photo_id={props.photo.id}
        />
        <img
          src={props.photo.urls.regular}
          className="photo-list__image"
          onClick={() => props.onShowModalClick(props.photo)}
        />
      </section>
      <section className="photo-list__user-details">
        <img
          src={props.photo.user.profile}
          className="photo-list__image photo-list__user-profile"
        />
        <section className="photo-list__user-info">
          <div className="">{props.photo.user.name}</div>
          <div className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </section>
      </section>
    </article>
  );
};

export default PhotoListItem;
