import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

//Este componente recuerda que es el producto detallado
//como seteamos la data de los cards, ya se puede pasar
// esa data a este componente
const CheckOutSiteMenu = () => {
  const { iCheckOutSiteMenu, toggleCheckOutSiteMenu } =
    useContext(ShoppingCartContext);

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
        </aside>
      )}
    </>
  );
};

export default CheckOutSiteMenu;
