function atualizarTexto(){
    document.getElementById('texto').innerHTML = "Texto atualizado com Javascript!";
}
var delay = 1000;


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(atualizarTexto, delay);
})