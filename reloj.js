const d= document;

function reloj(){

    setInterval(()=>{

        var horaSistema = new Date(),
        hora = horaSistema.getHours(),
        minuto = horaSistema.getMinutes(),
        segundo = horaSistema.getSeconds();    

        var mostrarHora = hora + " : " + minuto + " : " + segundo;
        
        d.formulario.reloj.value = mostrarHora;
        
    },1000); 
}

var boton = d.getElementById("iniciarreloj");
boton.addEventListener("click", reloj);