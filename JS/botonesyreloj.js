let intervalID; 

function iniciarReloj() {
    //actualizarReloj();
    intervalID = setInterval(actualizarReloj, 1000);
    document.getElementById("iniciar").disabled = true;
    document.getElementById("pausar").disabled = false;
}

function pausarReloj() {
    clearInterval(intervalID);
    document.getElementById("iniciar").disabled = false;
    document.getElementById("pausar").disabled = true;
}

function actualizarReloj() {
    const reloj = document.getElementById("reloj");
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const ampm = horas >= 12 ? "PM" : "AM";
    const hora12 = horas % 12 || 12; 

    const horaFormateada = `${hora12}:${agregarCero(minutos)}:${agregarCero(segundos)} ${ampm}`;
    reloj.textContent = horaFormateada;
}

function agregarCero(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo;
}


actualizarReloj();

document.getElementById("iniciar").addEventListener("click", iniciarReloj);
document.getElementById("pausar").addEventListener("click", pausarReloj);
