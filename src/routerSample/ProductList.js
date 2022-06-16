import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/urunler/${id}`);
  };

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Unit Price</td>
            <td>Detail</td>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={'/urunler/' + item.id}>{item.name}</Link>
                  </td>
                  <td>{item.unitPrice}</td>
                  <td>
                    <button onClick={() => goToDetail(item.id)}>Go To Detail</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
