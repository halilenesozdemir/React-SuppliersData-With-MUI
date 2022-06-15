import React, { useEffect, useState } from 'react';

const EffectSample1 = () => {
  const [sayac, setSayac] = useState(0);
  const [sayac2, setSayac2] = useState(0);

  // maliyetli bir işlem
  useEffect(() => {
    console.log('Bu kod satırı sadece component yüklendiğinde çalışır');
  }, []);

  useEffect(() => {
    console.log('Bu kod satırı yalnızca sayac 2 değiştiğinde çalışır');
  }, [sayac2]);

  return (
    <>
      <div>
        <h1>{sayac}</h1>
        <button onClick={() => setSayac(sayac + 1)}>Arttır</button>
      </div>
      <div>
        <h1>{sayac2}</h1>
        <button onClick={() => setSayac2(sayac2 + 1)}>Arttır</button>
      </div>
    </>
  );
};

export default EffectSample1;
