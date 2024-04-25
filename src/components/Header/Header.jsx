import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <div className="header">
        <div className="header-btn-menu"></div>
        <div className="header-logo">
          <p className="logo-text-left">ANI</p>
          <p className="logo-text-right">VIE</p>
        </div>
        {/* список ниже корее всего не нужен  */}
        {/* <ul className="header-menu">
          <li>{props.headerData.text1}</li>
          <li>{props.headerData.text2}</li>
          <li>{props.headerData.text3}</li>
          <li>{props.headerData.text4}</li>
          <li>{props.headerData.text5}</li>
          <li>{props.headerData.text6}</li>
          <li>{props.headerData.text7}</li>
        </ul> */}
        <div className="btn-search-anim">Поиск</div>
        <div className="theme-toggle">Тема</div>
        <div className="header-btn-login">Логин</div>
      </div>
    </div>
  );
};

export default Header;
