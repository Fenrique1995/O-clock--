const RELOJ = () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    if(hora < 10){
        hora = "0"+hora;
    }
    if(minuto < 10){
        minuto = "0"+minuto;
    }
    if(segundos < 10){
        segundos = "0"+segundos;
    }
    let miReloj = hora+" : "+minuto+" : "+segundos;
    return miReloj;
}
const HORA = () => {
    let laHora = RELOJ();
    let elReloj = document.getElementById('Reloj');
    elReloj.innerHTML = laHora; 
}
setInterval(HORA, 1000);