import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //incrementador de productos
  const [counter, setCounter] = useState(0);

  //estado para abrir y cerrar el modal de detalle de producto
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  //estado para abrir y cerrar el modal de detalle de CheckoutSiteMenu
  const [iCheckOutSiteMenu, setIsiCheckOutSiteMenu] = useState(false);

  //estado para guardar el detalle del producto
  const [productDetail, setProductDetail] = useState({});

  //estado para agregar productos al carrito
  const [cartProducts, setCartProducts] = useState([]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const toggle = () => {
    setIsProductDetailOpen(!isProductDetailOpen);
  };

  const toggleCheckOutSiteMenu = () => {
    setIsiCheckOutSiteMenu(!iCheckOutSiteMenu);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        increment,
        counter,
        isProductDetailOpen,
        toggle,
        productDetail,
        setProductDetail,
        cartProducts,
        setCartProducts,
        iCheckOutSiteMenu,
        setIsiCheckOutSiteMenu,
        toggleCheckOutSiteMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
