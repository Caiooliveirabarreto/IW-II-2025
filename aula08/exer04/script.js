document.addEventListener('DOMContentLoaded', function(){
    const areatexto = document.getElementById('campo');
    if (areatexto.innerText == '') {
        setTimeout(function() {
            alert('Por favor, preencha o campo de texto');
        }, 1000);
    }
})