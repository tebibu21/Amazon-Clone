import React, { useState, useEffect } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Loder from "../../components/Loader/Loder";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isloading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isloading ? (
        <Loder />
      ) : (
        <section className={classes.detail_container}>
          <ProductCard product={product} flex={true} renderDesc={true} renderAdd={true}/>
        </section>
      )}
    </LayOut>
  );
}

export default ProductDetail;
