var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function(){
      if(this.value.length>=1) {
        this.nextElementSibling.classList.add('fijar');
      } else   {
        this.nextElementSibling.classList.remove('fijar');
      }
  });
}

function validar(){
  var nombre,email,telefono,mensaje,expresion;
  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;
  telefono = document.getElementById("telefono").value;
  mensaje = document.getElementById("mensaje").value;
  expresion = /\w+@\w+\.+[a-z]/;


if(nombre === "" || email === "" || telefono === "" || mensaje === ""){
  alert("Todos los campos son obligatorios");
  return false;
 }
 else if(nombre.length>30) {
   alert("El nombre es muy largo");
   return false;
 }
 else if(email.length>100) {
  alert("El email es muy largo");
  return false;
 }
 else if(!expresion.test(correo)){
  alert("El correo no es válido");
  return false;
 }
 else if(telefono.length>15) {
  alert("El teléfono es muy largo");
  return false;
}
 else if(mensaje.length<10) {
  alert("El mensaje es muy corto");
  return false;
}
 else if(isNaN(telefono)) {
  alert("El teléfono ingresado no es un número");
  return false;
}

}