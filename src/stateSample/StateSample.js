import React from 'react';
import { useState } from 'react';

const StateSample = () => {
  // name değişkenin adı. setName değişkeni değiştirecek metod. useState içerisindeki değer ise değişkenin default değeri.
  const [name, setName] = useState('Halil');
  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName('Enes')}>Change Name</button>
    </>
  );
};

export default StateSample;
