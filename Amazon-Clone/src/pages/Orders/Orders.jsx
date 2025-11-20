import React, {useState, useContext, useEffect } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from "./Orders.module.css"
import { db } from '../../Utility/firebase';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';

function Orders() {
  const [{user}, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if(user){
      db.collection("users").doc(user.uid).collection("orders").orderBy("created","desc").onSnapshot((snapshot) => {
        console.log(snapshot);
        setOrders(
          snapshot.docs.map((doc)=>({
            id: doc.id,
            data: doc.data(),
          }))
        )
      })
    }else{
      setOrders([])
    }
  }, [user]);
  return (
    <LayOut>
     <section className={classes.container}>
      <div className={classes.orders__container}>
        <h2>Your Orders</h2>
        {
          orders?.length == 0 && <div style={{padding: "20px"}}>you don't have orders</div>
        }
        {/* ordered items */}
        <div>
          {
            orders?.map((eachOrders,i)=>{
              return (
                <div>
                  <hr />
                  <p>Order ID: {eachOrders?.id}</p>
                  {
                    eachOrders?.data?.basket?.map(order=>{
                      return (
                        <ProductCard
                          flex={true}
                          product={order}
                          key={order.id}
                        />
                      );
                    })
                  }
                </div>
            )
            })
          }
        </div>
      </div>
     </section>
    </LayOut>
  );
}

export default Orders
