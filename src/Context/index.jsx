import { createContext, useEffect, useState } from "react";

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

  //fetch de api
  const [items, setItems] = useState([]);

  //Filtered Products
  const [filteredItems, setFilteredItems] = useState([]);

  //Buscador de productos
  const [searchByTitle, setSearchBytitle] = useState("");
  // console.log(searchByTitle);

  //buscador de productos por categorias
  const [searchByCategory, setSearchByCategory] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

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

  //function para filtrar los items
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  //function para filtrar los categoria
  // Function to filter items by category
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category?.name
        ?.toLowerCase()
        .includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    return items; // If no search type is specified, return all items
  };

  // useEffect for searching by title and category
  useEffect(() => {
    const filtered = filterBy(
      searchByTitle && searchByCategory
        ? "BY_TITLE_AND_CATEGORY"
        : searchByTitle
        ? "BY_TITLE"
        : searchByCategory
        ? "BY_CATEGORY"
        : null,
      items,
      searchByTitle,
      searchByCategory
    );

    setFilteredItems(filtered);
  }, [items, searchByTitle, searchByCategory]);

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
        items,
        setItems,
        searchByTitle,
        setSearchBytitle,
        filteredItems,
        filteredItemsByTitle,
        searchByCategory,
        setSearchByCategory,
        filteredItemsByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
