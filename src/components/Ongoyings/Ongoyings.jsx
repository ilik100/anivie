import React from "react";
import "./Ongoyings.css";

const Ongoyings = (props) => {
  return (
    <div className="content">
      <div>
        {props.ongoyingsData.map((img) => (
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
           
          </a>
        ))}
      </div>
    </div>
  );
};

export default Ongoyings;
