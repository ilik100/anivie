import React from "react"; // импортируем реакт
import "./App.css"; // импортируем стили
import Header from "./components/Header/Header"; // импортируем компоненту Header
import Novelties from "./components/Novelties/Novelties"; // импортируем компоненту Ongoyings
import Search from "./Search"; // импортируем компоненту Search

function App(props) {
  // Тестирую задачу с лит кода
  // let nums = [2,7,11,15], target = 9

  // let nums = [2,7,11,15];

  // let twoSum = function (nums, target) {
  //   for (let i = 0; i < 9; i++) {   
  //     console.log(i);
  //     };
  // };

  // twoSum();


  // for (начало; условие; шаг) {
    // ... тело цикла ...
  // }

  // for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  //   alert(i);
  // }
  return (
    <div>
      <Header /> {/* компонента Header */}
        <Novelties noveltiesData={props.state.noveltiesData}/> {/* компонента Ongoyings с переданными в нее пропсами */}
        <Search /> {/* компонента Search */}
    </div>
  );
}

export default App;
