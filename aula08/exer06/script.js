document.addEventListener('DOMContentLoaded', function(){
    const div = document.getElementById('div_cola');
    const btn = document.getElementById('btn_copiar');
    btn.addEventListener('click', function(){
        div.select();
        navigator.clipboard.writeText(div.value)
    })
})