import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "components/useApplicationData";

const App = () => {
  const {
    state,
    setLikedPhotos,
    clearTopic,
    onShowModalClick,
    onHideModalClick,
    getPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        onShowModalClick={onShowModalClick}
        likedPhotos={state.likedPhotos}
        setLikedPhotos={setLikedPhotos}
        getPhotosByTopic={getPhotosByTopic}
        clearTopic={clearTopic}
      />
      {state.showModal && (
        <PhotoDetailsModal
          onHideModalClick={onHideModalClick}
          photo={state.photo}
          likedPhotos={state.likedPhotos}
          setLikedPhotos={setLikedPhotos}
        />
      )}
    </div>
  );
};

export default App;
