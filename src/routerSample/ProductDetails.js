import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => console.log('Web Api Error', err));
  }, []);

  return (
    <>
      <p>ID: {product.id}</p>
      <p>Name:{product.name}</p>
      <p>Unit Price:{product.unitPrice}</p>
      <p>Units In Stock: {product.unitsInStock}</p>
    </>
  );
};

export default ProductDetails;
