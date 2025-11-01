import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'; 
import classes from './Product.module.css'
import Loder from '../Loader/Loder';

function Product() {
    const [products, setProducts] = useState([]);
    const [isloading, setisLoading] = useState(false);
    useEffect(() => {
      setisLoading(true)
        axios.get(`https://fakestoreapi.com/products`)
        .then((res) => {
            setProducts(res.data)
            setisLoading(false)
        }).catch((err) => {
            console.log(err)
            setisLoading(false);
        })
    },[])
  return (
    <>
      {isloading ? (
        <Loder />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product
