import { mostrarConForEach } from "./utilArray.js";
import { filtrarPorPrecio } from "./utilArray.js";
import { modificarPrecio } from "./utilArray.js";
import { ordenarPorPrecio } from "./utilArray.js";
import { agregarProducto } from "./utilArray.js";
import { eliminarProductoMasBarato } from "./utilArray.js"

const productos = [
    {
        descripcion: "Auriculares", 
        precio: 49000 
    },
    {
        descripcion: "Mouse", 
        precio: 10 
    },
    {
        descripcion: "Teclado", 
        precio: 57000 
    },
    {
        descripcion: "Parlantes", 
        precio: 16 
    },
    {
        descripcion: "Gabinete", 
        precio: 80000 
    },
    {
        descripcion: "Microfono", 
        precio: 15000 
    },
    {
        descripcion: "Camara", 
        precio: 70000 
    },
];
const productoNuevo = {
    descripcion: "Pad Mouse",
    precio: 5000
};


//mostrar los objetos del array productos
//mostrarConForEach(productos);

//mostrar productos con precio mayor a 20
//filtrarPorPrecio(productos);

//mostrar los productos con incremento en el precio
//modificarPrecio(productos);

//mostrar los productos ordenados por precio (menor a mayor)
//ordenarPorPrecio(productos);

//agrego nuevo producto
//agregarProducto(productos, productoNuevo);

//eliminar producto mas barato
eliminarProductoMasBarato(productos);
console.log("Array después de eliminar el producto más barato:", productos);