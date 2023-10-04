import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <article className="photo-list__item">
      <section>
        <img src={props.photo.imageSource} className="photo-list__image" />
      </section>
      <section>
        <img src={props.photo.profile} className="photo-list__image" />
      </section>
      <section className="photo-list__user-details">
        <p className="photo-list__user_info">{props.photo.username}</p>
        <p className="photo-list__user-location">
          {props.photo.location.city}, {props.photo.location.country}
        </p>
      </section>
    </article>
  );
};

export default PhotoListItem;
