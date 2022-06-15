import React, { useState } from 'react';
import { categories } from '../data/categories';

const CategoryTable = () => {
  const [categoryList, setCategoryList] = useState(categories);

  const removeAll = () => {
    setCategoryList([]);
  };

  const removeItem = id => {
    let noDelete = categoryList.filter(q => q.id !== id);
    setCategoryList(noDelete);
  };

  const orderByAsc = () => {
    let sortedList = categoryList.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setCategoryList([...sortedList]);
  };

  const orderByDesc = () => {
    let sortedList = categoryList.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return 1;
      }
      if (fa > fb) {
        return -1;
      }
      return 0;
    });
    setCategoryList([...sortedList]);
  };

  const loadData = () => {
    setCategoryList(categories);
  };

  // Search işlemlerinde sabit bir datadan veriyi çekme mevzusu çok önemli...
  const searchCategories = data => {
    let searchText = data.toLowerCase().trim();
    let newCategories = categories.filter(q => q.name.toLowerCase().includes(searchText));
    setCategoryList(newCategories);
  };

  return (
    <>
      <div>
        <input type='text' onChange={e => searchCategories(e.target.value)} placeholder='Search by Name...' />
      </div>

      <div>
        <button onClick={() => orderByAsc()}>Order By Asc</button>
        <button onClick={() => orderByDesc()}>Order By Desc</button>
        <button onClick={() => loadData()}>Load Data</button>
      </div>

      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Description</td>
          </tr>
          {categoryList &&
            categoryList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <div>
          <button onClick={() => removeAll()}>Remove All</button>
        </div>
      </table>
    </>
  );
};

export default CategoryTable;
