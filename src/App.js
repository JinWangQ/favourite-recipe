import React from "react";
import {PageHeader} from "./component";
import PageContent from "./component/PageContent";
import "./App.scss";
import ModalRoot from "./component/Modals/ModalRoot";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageContent />
      <ModalRoot />
    </div>
  );
}

export default App;
