import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import {
  PlusIcon,
  CheckIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const {
    toggle,
    increment,
    setProductDetail,
    setCartProducts,
    toggleCheckOutSiteMenu,
    cartProducts,
    setIsiCheckOutSiteClose,
  } = useContext(ShoppingCartContext);

  // Function to show product details
  const showProduct = () => {
    setProductDetail(data);
  };

  // Function to add products to the cart
  const addProductsToCart = () => {
    setIsiCheckOutSiteClose(false);
    setCartProducts((prev) => [...prev, data]);
    increment();
  };

  // Function to open the modal
  const openModal = () => {
    toggleCheckOutSiteMenu();
  };

  // Check if the product is in the cart
  const isInCart = cartProducts.some((product) => product.id === data.id);

  // Render the appropriate icon based on cart status
  const renderIcon = () => (
    <div
      onClick={isInCart ? null : addProductsToCart}
      className="absolute mt-4 mr-4 top-0 p-1 m-2 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full cursor-pointer"
    >
      {isInCart ? (
        <CheckIcon className="size-6 text-black " />
      ) : (
        <PlusIcon className="size-6 text-black" />
      )}
    </div>
  );

  return (
    <div className="bg-slate-200 ml-16 w-56 rounded-lg h-60 shadow-lg">
      <figure onClick={showProduct} className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 px-3 py-0.5 ml-2 mb-2 left-0 bg-white/60 text-black text-xs rounded-lg">
          Categorias: {data.category.name}
        </span>
        <img
          onClick={toggle}
          src={data.images[0]}
          alt={data.description}
          className="w-full h-full object-cover rounded-lg cursor-pointer"
        />
        <div className="absolute mt-4 mr-4 top-0 p-1 m-2 left-0 flex justify-center items-center bg-white w-6 h-6 rounded-full">
          <ArrowLongUpIcon
            onClick={openModal}
            className="size-6 text-black cursor-pointer"
          />
        </div>
        {renderIcon()}
      </figure>
      <div className="flex justify-between items-stretch">
        <span className="text-sm font-light ml-4">Titulo: {data.title}</span>
        <span className="text-sm font-light mr-4">Price: ${data.price}</span>
      </div>
    </div>
  );
};

export default Card;
