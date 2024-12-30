
// funcion poara acumular 

export const totalPrice = (price) => {
    return price.reduce((acc, product) => acc + product.price, 0)

}