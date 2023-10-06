import { useReducer, useState } from "react";

export default function useApplicationData() {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const initialState = {
    showModal: false,
    likedPhotos: [],
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

  return {
    likedPhotos,
    setLikedPhotos,
    state,
    onShowModalClick,
    onHideModalClick,
  };
}
