import React from "react";
import {PageHeader} from "./component";
import PageContent from "./component/PageContent";
import "./App.scss";
import ModalRoot from "./component/Modals/ModalRoot";

function App() {
  const recipes = require("./data/deserts.json");
  return (
    <div className="App">
      <PageHeader />
      <PageContent recipes={recipes} />
      <ModalRoot />
    </div>
  );
}

export default App;
