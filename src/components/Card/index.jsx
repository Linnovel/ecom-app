import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const { toggle, increment, setProductDetail, setCartProducts, cartProducts } =
    useContext(ShoppingCartContext);

  // Esta funcion agarra el contenido de los cards
  //funcion que recibe la data y esa data la pasamos a la funcion
  const showProduct = (data) => {
    setProductDetail(data);
  };

  const addProductsToCart = (data) => {
    setCartProducts((prev) => [...prev, data]);
    increment();
    console.log("CART :", cartProducts);
  };

  return (
    <>
      <div
        onClick={() => showProduct(data)}
        className="bg-slate-200 ml-16 cursor-pointer w-56 rounded-lg h-60 shadow-lg"
      >
        <figure className="relative mb-4 w-full h-4/5 ">
          <span className="absolute bottom-0 px-3 py-0.5 ml-2 mb-2 left-0 bg-white/60 text-black text-xs rounded-lg ">
            Categorias : {data.category.name}
          </span>
          <img
            src={data.images[0]}
            alt={data.description}
            className="w-full h-full object-cover rounded-lg"
          />
          <div
            onClick={() => addProductsToCart(data)}
            className="absolute mt-4 mr-4 top-0 p-1  m-2 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
          >
            <PlusIcon className="size-6 text-black cursor-pointer" />
          </div>
        </figure>
        <p onClick={toggle} className="flex justify-between items-stretch">
          <span className="text-sm font-light ml-4">Titulo: {data.title}</span>
          <span className="text-sm font-light mr-4">Price: ${data.price}</span>
        </p>
      </div>
    </>
  );
};

export default Card;
