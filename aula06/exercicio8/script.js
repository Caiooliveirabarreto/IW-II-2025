
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('Enviar').addEventListener('click', function(){
        let texto = document.getElementById('palavras').value;
        let num = 0;
        for (num = 0; num < texto.length; num++) {
        }
        document.getElementById('mostraNum').innerHTML = "<h1>" + num + "</h1>";
    })
})