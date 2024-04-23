import React from "react";
import "./App.css";
import Ongoyings from "./components/Ongoyings/Ongoyings";

function App(props) {
  return (
    <div className="App">
      {/* Шапка сайта начало*/}
      <div className="header">
        <div className="logo">Лого</div>
        <ul className="header-menu">
          <li>{props.state.headerData.text1}</li>
          <li>{props.state.headerData.text2}</li>
          <li>{props.state.headerData.text3}</li>
          <li>{props.state.headerData.text4}</li>
          <li>{props.state.headerData.text5}</li>
          <li>{props.state.headerData.text6}</li>
          <li>{props.state.headerData.text7}</li>
        </ul>
        <div className="btn-search-anim">Поиск</div>
        <div className="btn-login">Логин</div>
      </div>
      {/* Шапка сайта конец*/}
      <Ongoyings />
    </div>
  );
}

export default App;
