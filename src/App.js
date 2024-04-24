import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Ongoyings from "./components/Ongoyings/Ongoyings";

function App(props) {
  return (
    <div className="App">
      <Header headerData={props.state.headerData}/>
      <Ongoyings ongoyingsData={props.state.ongoyingsData}/>
    </div>
  );
}

export default App;
