import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Ongoyings from "./components/Ongoyings/Ongoyings";
import Search_filter_in_react_project from "./components/Search_filter_in_react_project/Search_filter_in_react_project";

function App(props) {
  return (
    <div className="App">
      {/* <Header headerData={props.state.headerData}/> */}
      {/* <Ongoyings ongoyingsData={props.state.ongoyingsData}/> */}
      <Search_filter_in_react_project />
    </div>
  );
}

export default App;
