document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("esconder").addEventListener('click', function(params) {
        let paragrafo = document.getElementById('Paragrafo');
        paragrafo.style.display = 'none';
    })
})