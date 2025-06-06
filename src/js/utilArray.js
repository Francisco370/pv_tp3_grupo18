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

//ordenar el array de producos por precio de menor a mayor
export const ordenarPorPrecio = (productos) => {
    productos.sort((a, b) => a.precio - b.precio);
    console.log("Productos ordenados por precio (menor a mayor): ");
    productos.forEach(({descripcion, precio}) => {
        console.log(`Descripcion: ${descripcion}, precio: ${precio}`);
    });
}
//agregar un nuevo producto al final del array xD
export const agregarProducto = (productos, nuevoProducto) => {
    productos.push(nuevoProducto);
    console.log("Producto agregado exitosamente.");
    console.log(productos);
};
// Función para eliminar el producto con el precio más bajo (modifica el array original)
export const eliminarProductoMasBarato = (productos) => {
    const productoConPrecioMinimo = productos.reduce(
        (min, producto) => (producto.precio < min.precio ? producto : min),
        productos[0]
    );
    const index = productos.indexOf(productoConPrecioMinimo);
    if (index !== -1) {
        productos.splice(index, 1); // Modifica el array original eliminando el elemento
        console.log("Producto con el precio más bajo eliminado.");
    }
};