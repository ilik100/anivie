import React from "react";
import "./Novelties.css";

const Novelties = (props) => {
  return (
    <div className="content">
      <div className="header-novelties">
        <ul className="menu">
          <li>Новинки</li>
          <li>Фильмы</li>
          <li>Сериалы</li>
          <li>Онгоинги</li>
          <li>OVA</li>
          <li>Дорамы</li>
          <li> Случайное аниме </li>
        </ul>
        <div className="bottom-line"></div>
      </div>
      <div>
        {props.noveltiesData.map((img) => (
          <a
            href="#"
            key={img.id}
            className="editor_selections_item"
            onClick={() => console.log("id: ", img.id)} //эта строка с функцией позволяет получить id нажатой картинки в консоль
          >
            <div
              className="image"
              style={{
                // Получаем в фон картинку из нашей мини базы
                backgroundImage: `url(${img.image})`,
              }}
            ></div>
            <div className="novelties-data-name">{img.name}</div>
            <div className="novelties-data-date">{img.date}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Novelties;
