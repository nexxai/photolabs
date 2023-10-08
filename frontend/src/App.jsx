import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "components/useApplicationData";
import photos from "mocks/photos";
import topics from "mocks/topics";

const App = () => {
  const {
    likedPhotos,
    setLikedPhotos,
    state,
    onShowModalClick,
    onHideModalClick,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onShowModalClick={onShowModalClick}
        likedPhotos={likedPhotos}
        setLikedPhotos={setLikedPhotos}
      />
      {state.showModal && (
        <PhotoDetailsModal
          onHideModalClick={onHideModalClick}
          photo={state.photo}
          likedPhotos={likedPhotos}
          setLikedPhotos={setLikedPhotos}
        />
      )}
    </div>
  );
};

export default App;
