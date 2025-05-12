document.addEventListener('DOMContentLoaded', function(){
    const curtir = document.getElementById('curtir');
    const contador = document.getElementById('contador');
    curtir.addEventListener('click', function(){
        contador.textContent++;
    })
})