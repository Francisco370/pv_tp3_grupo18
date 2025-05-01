import { mostrarConForEach } from "./utilArray.js";
import { filtrarPorPrecio } from "./utilArray.js";

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

//mostrar los objetos del array productos
//mostrarConForEach(productos);

//mostrar productos con precio mayor a 20
filtrarPorPrecio(productos);