import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute setShowModal={setShowModal} />
      {showModal && <PhotoDetailsModal setShowModal={setShowModal} />}
    </div>
  );
};

export default App;
