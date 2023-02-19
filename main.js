/*---------------------------------defino posición de inicio*/ 
let pos = 0;

/*-------------------------------obtengo referencia de la caja*/
let box = document.getElementById('boxJS');

/*el siguiente código define un temporizador q' llama a la función mover casa 10 ms*/
let tiempo = setInterval(mover, 20);

/*----------------------------------------defino funcion mover*/
function mover(){
    if (pos >= 350){
        clearInterval(tiempo); //Es p/DETENER la animación cuando el cuadrado llegue al final del contenedor. 
                               //(Se le agrega una verificación a la función mover)
    }
    else {
        pos += 1;
        box.style.left = pos + 'px';
    }
}