function trocaCor() {
    document.body.style.backgroundColor = "blue";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoCor").addEventListener("click", trocaCor);
});