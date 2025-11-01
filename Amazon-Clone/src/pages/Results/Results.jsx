import React, { useEffect, useState } from 'react'
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from 'react-router-dom';
import classes from './Results.module.css'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loder from '../../components/Loader/Loder';


function Results() {
  const [results, setResults] = useState([])
  const [isloading, setisLoading] = useState(false);
  const {categoryName} = useParams()
  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
        setResults(res.data);
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      });
  },[])

  return (
    <LayOut>
      {isloading ? (
        <Loder />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true} />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results
