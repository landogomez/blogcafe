const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    mostrarMensaje('Formulario enviado con exito!');
})

function leerTexto(e){
    datos[e.target.id] = e.target.value;

    console.log(datos);
}

function mostrarMensaje(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove;
    }, 5000);
}

function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 5000);
}