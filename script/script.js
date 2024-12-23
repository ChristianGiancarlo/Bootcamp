function cambiarNombre(){
    let nombre = document.querySelector("#nombre");
    nombre.innerText = "Matthew Mimbela";
}

function aumentarConexion(elemento){
    let numSolicitud = document.querySelector("#numSolicitud");
    let numConexion = document.querySelector("#numConexion");

    let solicitudes = parseInt(numSolicitud.innerText);
    solicitudes--;

    numSolicitud.innerText = solicitudes;

    let conexiones = parseInt(numConexion.innerText);
    conexiones++;

    numConexion.innerText = conexiones;

    let divConexion = elemento.parentNode;
    divConexion.remove();

    let destino = document.querySelector(".conexiones");
    destino.appendChild(divConexion);

    let boton = divConexion.querySelectorAll(".botonSolicitud");
    for(let i = 0; i< boton.length; i++){
        boton[i].remove();
    }
}