import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <a href="#" onClick={() => props.clearTopic()}>
        <span className="top-nav-bar__logo">PhotoLabs</span>
      </a>
      <TopicList
        getPhotosByTopic={props.getPhotosByTopic}
        topics={props.topics}
      />
      <input value={props.state.searchTerm} onChange={props.search} />
      <FavBadge isFavPhotoExist={props.likedPhotos.length ? true : false} />
    </div>
  );
};

export default TopNavigationBar;
