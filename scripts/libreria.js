
const btnAddcart = document.querySelector("#btnAddcart");

btnAddcart.addEventListener("click", () => {

    Swal.fire({
        title: 'Perfecto!',
        text: 'Tu produco se añadio al carrito',
        icon: 'success',
        confirmButtonText: 'Continuar'
      });

});



