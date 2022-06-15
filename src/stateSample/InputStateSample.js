import React from 'react';
import { useState } from 'react';

const InputStateSample = () => {
  let footballTeams = ['GS', 'FB', 'TS', 'BJK'];
  //Inputtaki datayı çekmek için ınput'a bir state bağlayacağım.
  const [teams, setTeams] = useState(footballTeams);
  const [name, setName] = useState('');

  const addTeam = () => {
    setName('');
    setTeams([...teams, name]);
  };

  const removeTeams = () => {
    setTeams([]);
  };
  return (
    <>
      <input type='text' value={name} placeholder='Football Teams' onChange={e => setName(e.target.value)} />
      <button onClick={() => addTeam()}>Add Team</button>
      <button onClick={() => removeTeams()}>Remove Teams</button>

      <ul>{teams && teams.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </>
  );
};

export default InputStateSample;
