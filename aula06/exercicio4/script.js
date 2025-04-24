function mostraNome(nome) {
    alert(nome);
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('submit').addEventListener('click', function(){
        mostraNome(document.getElementById('nome').value);
    })
})