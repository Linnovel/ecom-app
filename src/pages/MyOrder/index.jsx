import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../components/OrderCard";

const MyOrder = () => {
  const { orderProducts } = useContext(ShoppingCartContext);
  console.log("Order Products:", orderProducts);
  const lastOrder = orderProducts[orderProducts.length - 1];

  return (
    <>
      <Layout>
        <div className="px-6">
          <h2 className="text-2xl font-bold">My Order</h2>
          {orderProducts.length === 0 ? (
            <p className="text-center text-lg font-medium">Cart is empty</p>
          ) : lastOrder.products && lastOrder.products.length > 0 ? (
            lastOrder.products.map((product) => (
              <OrderCard key={product.id} data={product} />
            ))
          ) : (
            <p className="text-center text-lg font-medium">
              No products found in the last order.
            </p>
          )}
        </div>
        <span className="font-bold text-2xl">
          Total: $ {lastOrder && lastOrder.totalPrice.toFixed(2)}
        </span>
      </Layout>
    </>
  );
};

export default MyOrder;
