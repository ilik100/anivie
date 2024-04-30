import React, { useState } from "react";
// import "./Header.css";

const Search_filter_in_react_project = () => {
  // const filterTest = (searchText, listOfTest) => { // принемаем аргументами поисковое слово и массив данных
  //   if (!searchText) { // если поисковое слово пустое то  
  //     return listOfTest; // возвращаем массив бе изменнений
  //   }
  //   else {
  //     return listOfTest.filter();
  //   }
  // };

  const fruits = ["яблоко", "банан", "апельсин"];

  const [searchTerm, setSearchTerm] = useState(""); // это пустая строка для начального  стейта

  return (
    <div>
      <div>Живой поиск</div>
      <div>
        <input
          value={searchTerm}
          type="text"
          placeholder="Поиск"
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Search_filter_in_react_project;
