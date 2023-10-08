import { useEffect, useReducer } from "react";

export const ACTIONS = {
  SHOW_MODAL: "showModal",
  HIDE_MODAL: "hideModal",
  TOGGLE_LIKED_PHOTO: "toggleLikedPhoto",
  LOAD_PHOTOS: "loadPhotos",
  LOAD_TOPICS: "loadTopics",
  SHOW_TOPIC: "showTopic",
};

export default function useApplicationData() {
  const initialState = {
    showModal: false,
    photo: null,
    likedPhotos: [],
    photos: [],
    topics: [],
    topic: null,
  };

  const func = (state, action) => {
    switch (action.command) {
      case ACTIONS.SHOW_MODAL:
        return { ...state, showModal: true, photo: action.photo };
      case ACTIONS.HIDE_MODAL:
        return { ...state, showModal: false, photo: null };
      case ACTIONS.TOGGLE_LIKED_PHOTO:
        const newLikedPhotos = [...state.likedPhotos];

        if (newLikedPhotos.includes(action.payload)) {
          newLikedPhotos.splice(newLikedPhotos.indexOf(action.payload), 1);
        } else {
          newLikedPhotos.push(action.payload);
        }

        return { ...state, likedPhotos: newLikedPhotos };
      case ACTIONS.LOAD_PHOTOS:
        return { ...state, photos: action.payload };
      case ACTIONS.LOAD_TOPICS:
        return { ...state, topics: action.payload };
      case ACTIONS.SHOW_TOPIC:
        return { ...state, topic: action.payload };
      default:
        throw new Error(
          `Tried to reduce with unsupported action command: ${action.command}`
        );
    }
  };

  const [state, setState] = useReducer(func, initialState);

  const onShowModalClick = (photo) => {
    setState({ command: ACTIONS.SHOW_MODAL, photo: photo });
  };
  const onHideModalClick = () => {
    setState({ command: ACTIONS.HIDE_MODAL });
  };

  const likedPhotos = state.likedPhotos;

  const setLikedPhotos = (photo) => {
    setState({ command: ACTIONS.TOGGLE_LIKED_PHOTO, payload: photo });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        return response.json();
      })
      .then((photos) => {
        setState({ command: ACTIONS.LOAD_PHOTOS, payload: photos });
      })
      .catch((error) => {
        throw new Error("Error fetching photos:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => {
        return response.json();
      })
      .then((topics) => {
        setState({ command: ACTIONS.LOAD_TOPICS, payload: topics });
      })
      .catch((error) => {
        throw new Error("Error fetching photos:", error);
      });
  }, []);

  const getPhotosByTopic = (id) => {
    setState({ command: ACTIONS.SHOW_TOPIC, payload: id });
  };

  useEffect(() => {
    if (state.topic) {
      fetch(`/api/topics/photos/${state.topic}`)
        .then((response) => {
          return response.json();
        })
        .then((photos) => {
          setState({ command: ACTIONS.LOAD_PHOTOS, payload: photos });
        })
        .catch((error) => {
          throw new Error("Error fetching photos:", error);
        });
    }
  }, [state.topic]);

  return {
    likedPhotos,
    setLikedPhotos,
    state,
    onShowModalClick,
    onHideModalClick,
    getPhotosByTopic,
  };
}
