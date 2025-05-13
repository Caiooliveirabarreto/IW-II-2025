document.addEventListener('DOMContentLoaded', function(){
    const areaTexto = document.getElementById('areatexto');
    areaTexto.addEventListener('input', function(){
        if (areaTexto.value.length < 5) {
            areaTexto.style.color = 'red';
        }
        else if(areaTexto.value.length >= 5){
            areaTexto.style.color = 'black';
        }
    })
    
})