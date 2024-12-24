const Card = ({ data }) => {
  return (
    <>
      <div className="bg-slate-200 ml-16 cursor-pointer w-56 rounded-lg h-60 shadow-lg">
        <figure className="relative mb-4 w-full h-4/5 ">
          <span className="absolute bottom-0 px-3 py-0.5 ml-2 mb-2 left-0 bg-white/60 text-black text-xs rounded-lg ">
            Categorias : {data.category.name}
          </span>
          <img
            src={data.images[0]}
            alt={data.description}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute mt-4 mr-4 top-0 p-1  m-2 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full">
            +
          </div>
        </figure>
        <p className="flex justify-between items-stretch">
          <span className="text-sm font-light ml-4">Titulo: {data.title}</span>
          <span className="text-sm font-light mr-4">Price: ${data.price}</span>
        </p>
      </div>
    </>
  );
};

export default Card;
