//Mostrar los objetos del array producto usando forEach
export const mostrarConForEach = (productos) => {
    productos.forEach(({descripcion, precio}) => {
        console.log(`
            Descripcion: ${descripcion}
            Precio: ${precio}`)
    })
}