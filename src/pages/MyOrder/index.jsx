import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";

const MyOrder = () => {
  const { orderProducts } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let indexProduct = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  // console.log("indexProduct", indexProduct);
  if (indexProduct !== "my-order") indexProduct = orderProducts?.length - 1;
  // console.log("Order Products:", orderProducts);
  const lastOrder = orderProducts[indexProduct];

  return (
    <>
      <Layout>
        <div className="px-6">
          <div className=" flex justify-between items-center mb-4">
            <Link to="/my-orders">
              <ChevronLeftIcon className="h-6 w-6" />
            </Link>
            <h1>My Order</h1>
          </div>
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
