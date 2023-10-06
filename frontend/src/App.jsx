import React, { useReducer, useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const initialState = {
    showModal: false,
  };

  const func = (state, action) => {
    if (action.command === "showModal") {
      return { ...state, showModal: true, photo: action.photo };
    } else if (action.command === "hideModal") {
      return { ...state, showModal: false, photo: null };
    } else {
      return { ...state, showModal: false };
    }
  };

  const [state, setState] = useReducer(func, initialState);

  const onShowModalClick = (photo) => {
    setState({ command: "showModal", photo: photo });
  };
  const onHideModalClick = () => {
    setState({ command: "hideModal" });
  };

  return (
    <div className="App">
      <HomeRoute
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
