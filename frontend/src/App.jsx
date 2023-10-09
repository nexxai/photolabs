import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "components/useApplicationData";

const App = () => {
  const {
    state,
    search,
    setLikedPhotos,
    clearTopic,
    onShowModalClick,
    onHideModalClick,
    getPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        onShowModalClick={onShowModalClick}
        setLikedPhotos={setLikedPhotos}
        getPhotosByTopic={getPhotosByTopic}
        clearTopic={clearTopic}
        state={state}
        search={search}
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
