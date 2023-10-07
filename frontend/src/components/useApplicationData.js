import { useReducer } from "react";

const actions = {
  SHOW_MODAL: "showModal",
  HIDE_MODAL: "hideModal",
  TOGGLE_LIKED_PHOTO: "toggleLikedPhoto",
};

export default function useApplicationData() {
  const initialState = {
    showModal: false,
    photo: null,
    likedPhotos: [],
  };

  const func = (state, action) => {
    if (action.command === actions.SHOW_MODAL) {
      return { ...state, showModal: true, photo: action.photo };
    } else if (action.command === actions.HIDE_MODAL) {
      return { ...state, showModal: false, photo: null };
    } else if (action.command === actions.TOGGLE_LIKED_PHOTO) {
      const newLikedPhotos = [...state.likedPhotos];

      if (newLikedPhotos.includes(action.payload)) {
        newLikedPhotos.splice(newLikedPhotos.indexOf(action.payload), 1);
      } else {
        newLikedPhotos.push(action.payload);
      }

      return { ...state, likedPhotos: newLikedPhotos };
    }
    return state;
  };

  const [state, setState] = useReducer(func, initialState);

  const onShowModalClick = (photo) => {
    setState({ command: actions.SHOW_MODAL, photo: photo });
  };
  const onHideModalClick = () => {
    setState({ command: actions.HIDE_MODAL });
  };

  const likedPhotos = state.likedPhotos;

  const setLikedPhotos = (photo) => {
    setState({ command: actions.TOGGLE_LIKED_PHOTO, payload: photo });
  };

  return {
    likedPhotos,
    setLikedPhotos,
    state,
    onShowModalClick,
    onHideModalClick,
  };
}
