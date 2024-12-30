import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

//Este componente recuerda que es el producto detallado
//como seteamos la data de los cards, ya se puede pasar
// esa data a este componente
const ProductDetail = () => {
  const { isProductDetailOpen, toggle, productDetail } =
    useContext(ShoppingCartContext);

  return (
    <>
      {isProductDetailOpen && (
        <aside className="product-detail mx-4  mt-8  flex flex-col fixed bg-white right-0 border border-black rounded">
          <div className="flex justify-between p-4 items-cente">
            <h2 className="font-medium text-xl ">Detail</h2>
            <div>
              {/* Close ICON X  */}

              <XMarkIcon
                onClick={toggle}
                className="size-6 text-black cursor-pointer"
              />
            </div>
          </div>
          <figure className="px-6">
            <img
              className="w-full h-full rounded-lg object-cover"
              src={productDetail.images}
              alt={productDetail.title}
            />
          </figure>
          <div className="flex flex-col p-4 mb-2">
            <span className="font-bold text-lg mb-2">
              Price: ${productDetail.price}
            </span>
            <span className="font-light text-md ">
              Title: {productDetail.title}
            </span>
            <span className="font-light text-xs">
              Description: {productDetail.description}
            </span>
          </div>
        </aside>
      )}
    </>
  );
};

export default ProductDetail;
