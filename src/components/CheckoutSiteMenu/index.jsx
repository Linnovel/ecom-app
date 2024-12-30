import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

//Este componente recuerda que es el producto detallado
//como seteamos la data de los cards, ya se puede pasar
// esa data a este componente
const CheckOutSiteMenu = () => {
  const {
    iCheckOutSiteMenu,
    toggleCheckOutSiteMenu,
    cartProducts,
    setCartProducts,
    orderProducts,
    setOrderProducts,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts);
  };

  // const totalProducts = () => {
  //   return cartProducts.reduce((acc, product) => acc + product.price, 0);
  // };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: "2021-10-10",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrderProducts([...orderProducts, orderToAdd]);
    setCartProducts([]);
  };

  return (
    <>
      {iCheckOutSiteMenu && (
        <aside className="checkout-site-menu mx-4  mt-8  flex flex-col fixed bg-white right-0 border border-black rounded">
          <div className="flex justify-between p-4 items-cente">
            <h2 className="font-medium text-xl ">My Order</h2>
            <div>
              {/* Close ICON X  */}

              <XMarkIcon
                onClick={toggleCheckOutSiteMenu}
                className="size-6 text-black cursor-pointer"
              />
            </div>
          </div>
          <div className="px-6 overflow-y-scroll ">
            {/*check if the car is empty  */}
            {cartProducts.length === 0 ? (
              <p className="text-center text-lg font-medium">Cart is empty </p>
            ) : (
              cartProducts.map((product) => (
                <OrderCard
                  key={product.id}
                  data={product}
                  handleDelete={handleDelete}
                />
              ))
            )}

            <hr />

            <div className="flex justify-between p-4 items-center ">
              <span className="font-medium text-xl ">Total: </span>
              <span className="font-medium text-xl ">
                {/* ${cartProducts.reduce((acc, product) => acc + product.price, 0)} */}
                {/* {totalPrice(cartProducts)} */}$ {totalPrice(cartProducts)}
              </span>
            </div>
            <Link to="my-orders/last">
              <button
                className="bg-black text-white p-2 rounded w-full py-4 mt-4"
                onClick={() => handleCheckOut()}
              >
                Checkout
              </button>
            </Link>
          </div>
        </aside>
      )}
    </>
  );
};

export default CheckOutSiteMenu;
