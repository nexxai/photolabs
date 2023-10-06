import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const similarPhotos = [];
  for (let similar in props.photo.similar_photos) {
    similarPhotos.push(props.photo.similar_photos[similar]);
  }

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.onHideModalClick()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={props.photo.urls.regular}
        />
        <section className="photo-details-modal__photographer-details">
          <img
            src={props.photo.user.profile}
            className="photo-details-modal__photographer-profile"
          />
          <section className="photo-details-modal__photographer-info">
            <div className="">{props.photo.user.name}</div>
            <div className="photo-details-modal__photographer-location">
              {props.photo.location.city}, {props.photo.location.country}
            </div>
          </section>
        </section>
        <p className="photo-details-modal__header">Similar Images</p>
        <PhotoList photos={similarPhotos} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
