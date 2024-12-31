import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = ({ data, handleDelete }) => {
  const { id, title, price, images } = data;

  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = () => (
      <XMarkIcon
        onClick={() => handleDelete(id)}
        className="size-6 text-black cursor-pointer"
      />
    );
  }

  return (
    <>
      <div className="flex justify-center items-center mb-4 w-full  rounded-lg p-4 bg-gray-200">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{title}</span>
          </div>
          <figure className="w-48 h-32">
            <img
              src={images}
              alt={title}
              className="w-full rounded-lg h-full object-cover"
            />
          </figure>
          <p className="text-sm font-light"></p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold">Precio: ${price}</p>
          {renderXMarkIcon && renderXMarkIcon()}
        </div>
      </div>
    </>
  );
};
export default OrderCard;
