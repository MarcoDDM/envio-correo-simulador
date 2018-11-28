//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
 




//Event listeners
eventListeners();

function eventListeners() {
     //Inicia app, deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     //Campos del formulario
     email.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);

     //Boton enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     // Boton reset
     resetBtn.addEventListener('click', resetFormulario);
}





//Funciones
function inicioApp() {
     //deshabilita envio
     btnEnviar.disabled = true;

}

//Valida que el formulario tenga algo
function validarCampo() {

     //Se valida la longitud del texto y que no esté vacío
      validarLongitud(this);

     //Valida solo el correo electronico

     if(this.type === 'email') {
          validarEmail(this); 
     }


     let errores = document.querySelectorAll('.error');
      if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
           if(errores.length === 0 ) {
               btnEnviar.disabled = false;
           }
      }
}

//Resetea formulario
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}
// Se envia el correo

function enviarEmail(e){
     // Gif spinner
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     //GIF envio mail
     const enviado = document.createElement('img');
     enviado.src = 'img/mail.gif';
     enviado.style.display = 'block';

     //Oculta gif spinner y muestra gif email
     setTimeout(function() {
          spinnerGif.style.display = 'none'; 
          
          document.querySelector('#loaders').appendChild(enviado);
          
          setTimeout(function() {
               enviado.remove();
               formularioEnviar.reset();
          }, 5000);
     }, 3000 );

     e.preventDefault();

}
 

//Chequea la longitud del texto en el formulario
function validarLongitud(campo) {
     if(campo.value.length > 0) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}

function validarEmail(campo) {
     const mensaje = campo.value;
     if(mensaje.indexOf('@') !== -1 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}