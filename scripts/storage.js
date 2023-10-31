
// localstorage


const usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioEnLS);

/** ARRAY DE OBJETOS **/
const productos = [
    { nombre: "Zapatillas Nike", precio: 80 },
    { nombre: "Audifonos Beats", precio: 20 },
    { nombre: "Reloj Casio", precio: 50 },
    { nombre: "Smartwatch Apple", precio: 90 },
    { nombre: "Perfume Coco Channel", precio: 50 },
    

];

localStorage.setItem("productos", JSON.stringify(productos));

const productosEnLS = JSON.parse(localStorage.getItem("productos"));
