import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Ongoyings from "./components/Ongoyings/Ongoyings";
import Search from "./Search";

function App(props) {
  return (
    <div>
      <Header />
      <Ongoyings ongoyingsData={props.state.ongoyingsData}/>
      <Search />
    </div>
  );
}

export default App;



