const RELOJ = () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let miReloj = hora+" : "+minuto+" : "+segundos;
    return miReloj;
}
const HORA = () => {
    let laHora = RELOJ();
    let elReloj = document.getElementById('Reloj');
    elReloj.innerHTML = laHora; 
}
setInterval(HORA, 1000);