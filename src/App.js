import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Шапка сайта начало*/}
      <div className="header">
        <a href="/" className="logo">Лого</a>
        <ul className="header-menu">
          <li>Онгоинги</li>
          <li>Аниме</li>
          <li>Дубляж</li>
          <li>Категории</li>
          <li>ПРИЛОЖЕНИЕ</li>
          <li>Блог</li>
          <li>Трекер</li>
        </ul>
        <div className="btn-search-anim">Поиск</div>
        <div className="btn-login">Логин</div>
      </div>
      {/* Шапка сайта конец*/}
    </div>
  );
}

export default App;
