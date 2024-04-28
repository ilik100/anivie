import React from "react";
import "./Header.css";

const Header = () => {
  const iconSearch =
    "https://icon-icons.com/icons2/2406/PNG/512/search_magnifier_icon_145939.png";

  return (
    <div>
      <div className="header">
        <div className="header-btn-menu"></div>
        <div className="header-logo">
          <p className="logo-text-left">ANI</p>
          <p className="logo-text-right">VIE</p>
        </div>
        <div className="search-anim">
          <input className="input-search-anim" placeholder="Поиск по сайту..." type="text"  />
          <img className="btn-search-anim" src={iconSearch} alt="Error" />
        </div>
        <div className="theme-toggle">Тема</div>
        <div className="header-btn-login">Логин</div>
      </div>
    </div>
  );
};

export default Header;
