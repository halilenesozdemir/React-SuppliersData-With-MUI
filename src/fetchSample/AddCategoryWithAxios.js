import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const AddCategoryWithAxios = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState();

  const addNewCategory = () => {
    let newCategory = {
      name: name,
      description: description,
    };

    axios.post('https://northwind.vercel.app/api/categories', newCategory).then(res => console.log('Axios Response,', res.data));
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

export default AddCategoryWithAxios;
