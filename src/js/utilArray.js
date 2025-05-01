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

//crear un array con los objetos productos pero con el precio con IVA incluido (21%)
export const modificarPrecio = (productos) => {
    const productosConPreciosModificados = productos.map(producto =>({
        descripcion: producto.descripcion,
        precio: producto.precio * 1.21
    }));
    console.log(productosConPreciosModificados);
}