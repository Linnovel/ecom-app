import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Layout from "../Layout";

const MyOrdersCards = ({ totalPrice, totalProducts }) => {
  return (
    <>
      <Layout>
        <div className="flex w-120 mb-8 border  justify-center items-center    rounded-lg p-4 bg-gray-200">
          <div className="flex justify-between w-full ">
            <div className="flex flex-col">
              <span className="text-sm font-light">
                Fecha de compra :01.02.2024
              </span>
              <span className="text-xl font-medium">
                Cantidad de productos {totalProducts}
              </span>{" "}
              {}
              <span className="text-2xl font-bold">
                {" "}
                Total ${totalPrice}
              </span>{" "}
              {}
            </div>
            <div className="flex p-0">
              <span>Click for details</span>
              <ArrowRightIcon className="size-6 text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default MyOrdersCards;
