/**
* El usuario tendrá un saldo de 100€.
*Puntos extra si hay una casilla de aceptar terminos y no deja enviar la compra hasta que se marque.
*El usuario selecciona un libro de un select y escribe cuántos quiere comprar en un input.
*Al pulsar “Agregar”, se valida que la cantidad sea positiva y se muestra en un <ul> el nombre del libro y la cantidad agregada.
*Mantener un saldo virtual que disminuya con la compra; no se puede comprar más de lo que el saldo permite
*/

var saldoUsuario = 100;
document.getElementById("saldo").innerText="Saldo:"+saldoUsuario; //escribir cuando carga la pagina para que quede bonito

function agregarLibro (){
   const libroSeleccionado = document.getElementById("seleccionLibros").value;
   const cantidad = Number( document.getElementById("cantidad").value );
   let valorLibro=0;
   let nombreLibro="";
   switch(libroSeleccionado){
       case "1":
           valorLibro=25;
           nombreLibro="Libro1";
           break;
       case "2":
           valorLibro=40;
           nombreLibro="Libro2";
           break;
       case "3":
           valorLibro=15;
           nombreLibro="Libro3";
           break;
       case "0":
           alert("Por favor elija una opción");
           break;
       default:
           alert("Error, no existe esa opción");        
   }
   
   if (cantidad>0){
       if (saldoUsuario>=cantidad*valorLibro){
           //comprar
           saldoUsuario-=cantidad*valorLibro;
           escribirLista(nombreLibro, cantidad);
       }
       else{
           alert("Saldo insuficiente")
       }
   }
   else{
       alert("Cantidad incorrecta")
   }
   
}

function escribirLista(nombre, cantidad){
   const rutaEscribir = document.getElementById("lista");
   const rutaSaldo = document.getElementById("saldo");
   
   rutaSaldo.innerText="Saldo:"+saldoUsuario;
   rutaEscribir.innerHTML+="<li>Ha comprado"+ cantidad +" de " + nombre + "</li>"
   
   
}

function confirmar(){
   const validacion = document.getElementById("validacion").checked; //TRUE o FALSE
   if (validacion){
       document.getElementById("boton").disabled=false;
   }
   else{
       document.getElementById("boton").disabled=true;

   }
   
}