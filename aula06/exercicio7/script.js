function trocaCor() {
    document.getElementById('paragrafo').style.color = 'red';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoCor").addEventListener("click", trocaCor);
});