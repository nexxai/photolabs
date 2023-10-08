import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => {
        return (
          <TopicListItem
            key={topic.id}
            id={topic.id}
            slug={topic.slug}
            title={topic.title}
            getPhotosByTopic={props.getPhotosByTopic}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
