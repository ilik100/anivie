import React from "react";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      {/* Шапка сайта начало*/}
      <div className="header">
        {/* <a href="/" className="logo">{state.headerData.search}</a> */}
        <ul className="header-menu">
          <li>{props.state.headerData.text1}</li>
          <li>{props.state.headerData.text2}</li>
          <li>{props.state.headerData.text3}</li>
          <li>{props.state.headerData.text4}</li>
          <li>{props.state.headerData.text5}</li>
          <li>{props.state.headerData.text6}</li>
          <li>{props.state.headerData.text7}</li>
        </ul>
        <div
          className="btn-search-anim"
          style={{
            // Получаем в фон картинку из нашей мини базы
            backgroundImage: `url(${props.state.headerData.search})`,
          }}
        ></div>
        <div className="btn-login">Логин</div>
      </div>
      {/* Шапка сайта конец*/}
    </div>
  );
}

export default App;
