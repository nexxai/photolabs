import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <a onClick={() => props.getPhotosByTopic(props.id)} href="#">
        <span>{props.title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
