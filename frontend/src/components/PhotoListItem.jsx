import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <article className="photo-list__item">
      <section>
        <img src={props.photo.imageSource} className="photo-list__image" />
      </section>
      <section className="photo-list__user-details">
        <img
          src={props.photo.profile}
          className="photo-list__image photo-list__user-profile"
        />
        <section className="photo-list__user-info">
          <div className="">{props.photo.username}</div>
          <div className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </section>
      </section>
    </article>
  );
};

export default PhotoListItem;
