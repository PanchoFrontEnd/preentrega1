

const baseDeDatos = [
    { id: "zapatillas", nombre: "Zapatilla Nike", precio: 80 },
    { id: "audifonos", nombre: "Audifonos Beats", precio: 20 },
    { id: "reloj", nombre: "Reloj Casio", precio: 50 },
    { id: "smertwatch", nombre: "Smartwatch Apple", precio: 90 },
    { id: "perfume", nombre: "Perfume Coco Chanel", precio: 50 }
];


const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(baseDeDatos);
        }, 500);
    })
}

let products = [];

const infoProduct = document.querySelector("#info-product");

function product (array) {

    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre} - ${item.precio}`

        lista.append(li);
    });

}


