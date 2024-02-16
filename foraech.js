var tempofilme = 60;
var imiciofilme = 0;

for (var t = 0; t < tempofilme; t++) {
    setTimeout(function () {
        console.clear();
        console.log("assistindo filme 60 segundos... ainda faltam [" + (tempofilme -
            iniciofilme) + "] segundos.");
            iniciofilme++;
    },t*1000);
}
