import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <div className="logo">Лого</div>
        <ul className="header-menu">
          <li>{props.headerData.text1}</li>
          <li>{props.headerData.text2}</li>
          <li>{props.headerData.text3}</li>
          <li>{props.headerData.text4}</li>
          <li>{props.headerData.text5}</li>
          <li>{props.headerData.text6}</li>
          <li>{props.headerData.text7}</li>
        </ul>
        <div className="btn-search-anim">Поиск</div>
        <div className="btn-login">Логин</div>
      </div>
    </div>
  );
};

export default Header;
