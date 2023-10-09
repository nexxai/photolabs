import axios from "axios";
import { useEffect, useReducer } from "react";

export const ACTIONS = {
  SHOW_MODAL: "showModal",
  HIDE_MODAL: "hideModal",
  TOGGLE_LIKED_PHOTO: "toggleLikedPhoto",
  LOAD_PHOTOS: "loadPhotos",
  LOAD_TOPICS: "loadTopics",
  SHOW_TOPIC: "showTopic",
  CLEAR_TOPIC: "clearTopic",
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

  /**
   * The reducer actions
   */

  const reducerFunction = (state, action) => {
    switch (action.command) {
      case ACTIONS.SHOW_MODAL:
        return { ...state, showModal: true, photo: action.photo };
      case ACTIONS.HIDE_MODAL:
        return { ...state, showModal: false, photo: null };
      case ACTIONS.TOGGLE_LIKED_PHOTO:
        // Create a copy of the list of currently liked photos
        const newLikedPhotos = [...state.likedPhotos];

        // Check to see if the selected photo is currently liked
        if (newLikedPhotos.includes(action.payload)) {
          // It is already liked, so remove the like
          newLikedPhotos.splice(newLikedPhotos.indexOf(action.payload), 1);
        } else {
          // It isn't currently liked, so add the like
          newLikedPhotos.push(action.payload);
        }

        return { ...state, likedPhotos: newLikedPhotos };
      case ACTIONS.LOAD_PHOTOS:
        return { ...state, photos: action.payload };
      case ACTIONS.LOAD_TOPICS:
        return { ...state, topics: action.payload };
      case ACTIONS.SHOW_TOPIC:
        return { ...state, topic: action.payload };
      case ACTIONS.CLEAR_TOPIC:
        return { ...state, topic: null };
      default:
        throw new Error(
          `Tried to reduce with unsupported action command: ${action.command}`
        );
    }
  };

  const [state, setState] = useReducer(reducerFunction, initialState);

  /**
   * Functions to set some piece of the state
   */

  const onShowModalClick = (photo) => {
    setState({ command: ACTIONS.SHOW_MODAL, photo: photo });
  };

  const onHideModalClick = () => {
    setState({ command: ACTIONS.HIDE_MODAL });
  };

  const setLikedPhotos = (photo) => {
    setState({ command: ACTIONS.TOGGLE_LIKED_PHOTO, payload: photo });
  };

  const getPhotosByTopic = (id) => {
    setState({ command: ACTIONS.SHOW_TOPIC, payload: id });
  };

  const clearTopic = () => {
    setState({ command: ACTIONS.CLEAR_TOPIC });
  };

  /**
   * Fetching data functionality
   */

  const clearSelectedTopicAndGetAllPhotos = () => {
    const photosPromise = axios.get("/api/photos").catch((error) => {
      throw new Error("Error fetching photos:", error);
    });

    const topicsPromise = axios.get("/api/topics").catch((error) => {
      throw new Error("Error fetching photos:", error);
    });

    // Photos and topics are related so only display if both return data
    Promise.all([photosPromise, topicsPromise]).then(([photos, topics]) => {
      setState({ command: ACTIONS.LOAD_PHOTOS, payload: photos.data });
      setState({ command: ACTIONS.LOAD_TOPICS, payload: topics.data });
    });
  };

  const getPhotosFromSpecificTopic = () => {
    axios
      .get(`/api/topics/photos/${state.topic}`)
      .then((response) => {
        setState({ command: ACTIONS.LOAD_PHOTOS, payload: response.data });
      })
      .catch((error) => {
        throw new Error("Error fetching photos:", error);
      });
  };

  /**
   * useEffects()
   */

  // Get all photos on initial load
  useEffect(() => {
    clearSelectedTopicAndGetAllPhotos();
  }, []);

  useEffect(() => {
    if (state.topic === null) {
      // If the topic is now null, get all photos
      clearSelectedTopicAndGetAllPhotos();
    } else if (state.topic) {
      // The user chose a topic so only fetch those photos
      getPhotosFromSpecificTopic();
    }
  }, [state.topic]);

  return {
    state,
    setLikedPhotos,
    clearTopic,
    onShowModalClick,
    onHideModalClick,
    getPhotosByTopic,
  };
}
