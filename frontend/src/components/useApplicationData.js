import axios from "axios";
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

        // Check to see if the photo is currently liked
        if (newLikedPhotos.includes(action.payload)) {
          // It is, so remove the like
          newLikedPhotos.splice(newLikedPhotos.indexOf(action.payload), 1);
        } else {
          // It isn't, so add the like
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
    const photosPromise = axios.get("/api/photos").catch((error) => {
      throw new Error("Error fetching photos:", error);
    });

    const topicsPromise = axios.get("/api/topics").catch((error) => {
      throw new Error("Error fetching photos:", error);
    });

    Promise.all([photosPromise, topicsPromise]).then((values) => {
      setState({ command: ACTIONS.LOAD_PHOTOS, payload: values[0].data });
      setState({ command: ACTIONS.LOAD_TOPICS, payload: values[1].data });
    });
  }, []);

  const getPhotosByTopic = (id) => {
    setState({ command: ACTIONS.SHOW_TOPIC, payload: id });
  };

  useEffect(() => {
    if (state.topic) {
      axios
        .get(`/api/topics/photos/${state.topic}`)
        .then((response) => {
          setState({ command: ACTIONS.LOAD_PHOTOS, payload: response.data });
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
