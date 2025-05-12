document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('btn');
    const paragrafo = document.getElementById('p_data');
    btn.addEventListener('click', function(){
        const data = new Date();
        let datatexto = data.toTimeString();
        datatexto = datatexto.split(' ')[0];
        paragrafo.innerHTML = datatexto;
    })
})