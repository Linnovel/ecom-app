import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //incrementador de productos
  const [counter, setCounter] = useState(0);

  //estado para abrir y cerrar el modal de detalle de producto
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  //estado para abrir y cerrar el modal de detalle de CheckoutSiteMenu
  const [iCheckOutSiteMenu, setIsiCheckOutSiteMenu] = useState(false);
  const [iCheckOutSiteClose, setIsiCheckOutSiteClose] = useState(true);

  //estado para guardar el detalle del producto
  const [productDetail, setProductDetail] = useState({});

  //estado para agregar productos al carrito
  //Recuerda que dentro de este estado se guardan los productos guardaddos
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [orderProducts, setOrderProducts] = useState([]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const toggle = () => {
    setIsProductDetailOpen(!isProductDetailOpen);
  };

  //Para abrir myOrder
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
        setIsiCheckOutSiteClose,
        orderProducts,
        setOrderProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
