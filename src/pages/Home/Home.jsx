import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

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
        <div className="grid grid-cols-4 m-0 gap-4 w-full max-2-screen-lg mx-auto">
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        {/* <Card /> */}
      </Layout>
    </>
  );
};

export default Home;
