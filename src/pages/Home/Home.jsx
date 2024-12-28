import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <Layout>
        Home
        <div className="grid grid-cols-3 m-0 gap-4 w-full max-w-screen-lg mx-auto">
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
};

export default Home;
