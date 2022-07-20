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

const CALENDAR = () => {
    let fecha = new Date();
    let dia = fecha.getDay();
    let mes = fecha.getMonth();
    let año = fecha.getFullYear();
    if (dia < 10) {
        dia = "0"+dia
    }
    if (mes < 10) {
        mes = "0"+mes
    }
    if (año < 10) {
        año = "0"+año
    }
    let calendario = dia+"/"+mes+"/"+año;
    return calendario;
}
const HORA = () => {
    let laHora = RELOJ();
    let elReloj = document.getElementById('Reloj');
    elReloj.innerHTML = laHora;
    let elCalendario = CALENDAR();
    let añoYMesYDias = document.getElementById('Calendario');
    añoYMesYDias.innerHTML = elCalendario;
}
setInterval(HORA, 1000);