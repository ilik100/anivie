import React from "react"; // импортируем реакт
import "./App.css"; // импортируем стили 
import Header from "./components/Header/Header"; // импортируем компоненту Header
import Ongoyings from "./components/Ongoyings/Ongoyings"; // импортируем компоненту Ongoyings 
import Search from "./Search"; // импортируем компоненту Search 

function App(props) {
  return (
    <div>
      <Header /> {/* компонента Header */}
      {/* <Ongoyings ongoyingsData={props.state.ongoyingsData}/> компонента Ongoyings с переданными в нее пропсами */}
      {/* <Search /> компонента Search */}
    </div>
  );
}

export default App;



