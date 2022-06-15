import React from 'react';
import { useState } from 'react';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState();

  const addNewCategory = () => {
    let newCategory = {
      name: name,
      description: description,
    };

    let requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCategory),
    };

    fetch('https://northwind.vercel.app/api/categories', requestOptions)
      .then(res => res.json())
      .then(data => console.log('Data', data));
  };

  return (
    <>
      <div>
        <label>Name</label>
        <input type='text' onChange={e => setName(e.target.value)} placeholder='Name' />
      </div>

      <div>
        <label> Description </label>
        <input type='text' onChange={e => setDescription(e.target.value)} placeholder='Description' />
      </div>

      <button onClick={() => addNewCategory()}>Add</button>
    </>
  );
};

export default AddCategory;
