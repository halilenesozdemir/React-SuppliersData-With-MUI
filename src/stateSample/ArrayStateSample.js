import React, { useState } from 'react';

const ArrayStateSample = () => {
  let cityList = ['Ankara', 'İstanbul', 'Eskisehir', 'Mugla', 'Diyarbakir'];

  const [cities, setCities] = useState(cityList);

  const loadCity = () => {
    setCities(cityList);
  };

  return (
    <>
      <ul>{cities && cities.map((item, index) => <li key={index}>{item}</li>)}</ul>

      <button onClick={() => setCities([])}>Empty List</button>
      <button onClick={() => loadCity()}>Load City</button>
    </>
  );
};

export default ArrayStateSample;
