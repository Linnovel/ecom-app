import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { setSearchByCategory, counter } = useContext(ShoppingCartContext);

  return (
    <>
      <nav className="flex justify-between items-center  top-0 py-8  font-light fixed w-full bg-orange-300 z-10">
        {/* // Navbar de la izquierda */}
        <ul className="flex items-center gap-4 ml-4">
          <li className="font-bold text-lg">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Shopi
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setSearchByCategory()}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setSearchByCategory("clothes")}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/clothes"
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setSearchByCategory("electronics")}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/electronics"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setSearchByCategory("fornitures")}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/fornitures"
            >
              Fornitures
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setSearchByCategory("toys")}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/toys"
            >
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setSearchByCategory("others")}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/others"
            >
              Others...
            </NavLink>
          </li>
        </ul>
        {/* // Navbar de la derecha */}
        <ul className="flex items-center gap-4 mr-4">
          <li>
            <span className="text-black">luis@email.com</span>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/my-orders"
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/my-account"
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/sign-in"
            >
              Sing In
            </NavLink>
          </li>
          <li>
            <div className="flex ">
              <ShoppingBagIcon className="size-6 text-black" />
              {counter}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
