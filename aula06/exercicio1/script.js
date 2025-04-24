function mostraMensagem() {
    alert("Javascript é divertido!");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoMensagem").addEventListener("click", mostraMensagem);
});