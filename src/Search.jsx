import { useState, useEffect } from "react";
import CarList from "./CarList"; 

import MOCK_DATA from './MOCK_DATA.json';

const filterCars = (searchText, listOfCars) => {
  if (!searchText) {
    return listOfCars;
  }
  return listOfCars.filter(({ car_model }) =>
    car_model.toLowerCase().includes(searchText.toLowerCase())
  );
}
const data = MOCK_DATA;

function Search() {


  const [searchTerm, setSearchTerm] = useState('');
  const [carList, setCarList] = useState(data);


  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterCars(searchTerm, data);
      setCarList(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);



  return (
    <div>
      <div>Живой Поиск</div>
      <div>
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Поиск машины по модели"
          onChange={(e) => setSearchTerm(e.target.value)}
          srtyle={{
            width: '600px',
          }}
        />
        <CarList carList={carList} />
      </div>
    </div>
  );
}

export default Search;