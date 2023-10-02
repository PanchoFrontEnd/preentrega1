// Simulador interactivo "Carrito de compras"

alert('Bienvenidos a la TIenda de Panchosky');

const zapatillas_nike = 80;
const audifonos_beats = 20;
const reloj_casio = 50;
const smartwatch_apple = 50;
const perfume_channel = 90;
let conteo = 0;
let total = 0;

function precioProducto(producto) {
    switch (producto.trim().toLowerCase()) {
        case "1":
            return zapatillas_nike;
        case "2":
            return audifonos_beats;
        case "3":
            return reloj_casio;
        case "4":
            return smartwatch_apple;
        case "5":
            return perfume_channel;
        default:
            return 0;
    }
}

//Interaccion para poder ingresar mas de 1 producto a la vez 

let continuar = prompt("¿Desea revisar el stock de nuestros productos? \n Escriba 'si' para continuar o 'no' para terminar");

while (continuar.trim().toLowerCase() != "no") {
    let producto = prompt("Escriba el codigo del producto que desea comprar :\n1 - Zapatillas Nike\n2 - Audifonos Beats\n3 - Reloj Casio\n4 - Smartwatch Apple\n5 - Perfume Channel:");

    
    let precio = precioProducto(producto);
    if (precio === 0) {
        alert("Datos del producto no válidos. Por favor, ingrese los datos correspondientes.");
    } else {
        total += precio;
        conteo++;
        alert("Añadiste a tu carrito " + conteo + " unidades del producto \n Tienes hasta el momento un total de : $ " + total);


 //Interaccion del cliente para ver si quiere seguir comprando o finaliza la compra 


        continuar = prompt("¿Desea seguir comprando en la Tienda de Panchosky? \n Escriba 'si' para continuar o 'no' para terminar");
       
      
    }
}

alert("El total de su compra es $" + total + "\nGracias por preferir la Tienda de Panchosky vuelva pronto ");