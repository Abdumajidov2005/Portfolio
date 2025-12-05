import React, { useState, useEffect } from "react";
import RouterDom from "./pages/routers/RouterDom";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <RouterDom />
    </>
  );
}

export default App;
