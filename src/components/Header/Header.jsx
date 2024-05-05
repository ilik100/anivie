import React from "react"; // импортируем реакт
import "./Header.css"; // импортируем стили

const Header = () => {
  const iconSearch =
    "https://icon-icons.com/icons2/2406/PNG/512/search_magnifier_icon_145939.png"; // константа содержащяя в себе картинку

  let refdiv1 = React.createRef();

  // Функция для смены фона Header по нажатию на кнопку тема
  function handleClick(event) {                      // создаёт функцию handleClick, которая принимает аргумент event
    const target = event.target;                     // создаёт константу target, равную значению свойства event.target. Это позволяет получить доступ к элементу, на котором произошло событие
    if (target.className.indexOf("active") === -1) { // проверяет, содержит ли класс элемента значение «active». Если результат равен -1, то условие истинно и выполняется следующий блок
      target.classList.add("active");                // добавляет класс «active» к текущему элементу
      const refdiv1v1 = refdiv1.current;             // создает константу к которой обращаться по рефу
      refdiv1v1.style.background = "#FFFFFF";        // сменить фон блока где весит реф
    } else {                                         // если условие в начале блока ложно, то выполняется этот блок
      target.classList.remove("active");             // удаляет класс «active» из текущего элемента
      const refdiv1v1 = refdiv1.current;             // создает константу к которой обращаться по рефу
      refdiv1v1.style.background = "#181d2d";        // сменить фон блока где весит реф
    }
  }



  return (
    <div className="header-container" ref={refdiv1}>
      <div className="header">
        <div className="header-btn-menu"></div>
        <div className="header-logo">
          <p className="logo-text-left">ANI</p>
          <p className="logo-text-right">VIE</p>
        </div>
        <div className="search-anim">
          <input
            className="input-search-anim"
            placeholder="Поиск по сайту..."
            type="text"
          />
          <img className="btn-search-anim" src={iconSearch} alt="Error" />
        </div>
        <div className="theme-toggle" onClick={handleClick}>
          Тема
        </div>
        <div className="header-btn-login">Логин</div>
      </div>
    </div>
  );
};

export default Header;
