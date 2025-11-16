import React, { useContext,useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from "./Payment.module.css";
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from "../../components/Product/ProductCard"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';

function Payment() {
  const [{basket,user}] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
      return item.amount + amount;
    }, 0);
     const total = basket.reduce(
       (amount, item) => amount + item.price * item.amount,
       0
     );

  const [cardError, setCardError] = useState(null);  
   const stripe = useStripe();
   const elements = useElements();

  const handleChange = (e) => {
    e?.error?.message? setCardError(e?.error?.message): setCardError("")
  };
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card__container}>
            <div>
              <form action="">
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />

                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{display: "flex", gap: "10px"}}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment
