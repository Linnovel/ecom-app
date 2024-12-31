import React, { useContext } from "react";
import Layout from "../../components/Layout";
import MyOrdersCards from "../../components/OrdersCards";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { orderProducts } = useContext(ShoppingCartContext);
  // console.log("Order Products:", orderProducts);

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-bold">My Oders</h1>
        {orderProducts.length === 0 ? (
          <p>No hay ordenes</p>
        ) : (
          orderProducts.map((data, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <MyOrdersCards
                totalPrice={data.totalPrice}
                totalProducts={data.totalProducts}
              />
            </Link>
          ))
        )}
      </Layout>
    </>
  );
};

export default MyOrders;
