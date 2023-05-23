import React from "react";
import Routers from "./routes";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "hooks/LoadingContext";
import CustomLoading from "components/Loading";
import "./App.css";

function App() {
  return (
    <LoadingProvider>
      <CustomLoading />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
