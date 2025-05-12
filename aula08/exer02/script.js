document.addEventListener('DOMContentLoaded',function(params) {
    const modoEscuro = document.getElementById('Modo_escuro');
    const modoClaro = document.getElementById('Modo_claro');

    modoClaro.addEventListener('click', function(){
        document.body.classList.add('TemaClaro');
        document.body.classList.remove('TemaEscuro');
    })
    modoEscuro.addEventListener('click', function(){
        document.body.classList.add('TemaEscuro');
        document.body.classList.remove('TemaClaro');
    })
})