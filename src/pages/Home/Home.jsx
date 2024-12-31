import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

const Home = () => {
  const {
    items,
    setItems,
    searchByTitle,
    setSearchBytitle,
    filteredItemsByTitle,
    filteredItems,
  } = useContext(ShoppingCartContext);

  const renderView = () => {
    if (searchByTitle?.length > 0) {
      if (filteredItems?.length > 0) {
        return (
          <div className="grid grid-cols-3 m-0 gap-4 w-full max-w-screen-lg mx-auto">
            {filteredItems.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        );
      } else {
        return <p className="text-center">No se encontraron productos</p>;
      }
    } else {
      return (
        <div className="grid grid-cols-3 m-0 gap-4 w-full max-w-screen-lg mx-auto">
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-bold text-center mb-8">Ecomm App</h1>
        <input
          className="w-50% p-2 border border-gray-300 rounded mb-8 focus:outline-none"
          type="text"
          placeholder="Busca tu product favorito"
          onChange={(event) => setSearchBytitle(event.target.value)}
        />
        {renderView()}
        <ProductDetail />
      </Layout>
    </>
  );
};

export default Home;
