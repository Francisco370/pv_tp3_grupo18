//Mostrar los objetos del array producto usando forEach
export const mostrarConForEach = (productos) => {
    productos.forEach(({descripcion, precio}) => {
        console.log(`
            Descripcion: ${descripcion}
            Precio: ${precio}`)
    })
}

//filtrar productos cuyo precio sea mayor a 20
export const filtrarPorPrecio = (productos) => {
    const productosPorPrecio = productos.filter(pro => pro.precio > 20);
    console.log(productosPorPrecio);
}