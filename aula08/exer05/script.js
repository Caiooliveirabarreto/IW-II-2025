document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('btn_efeito');
    btn.addEventListener('click', function(){
        const paragrafo = document.getElementById('p_efeito');
        paragrafo.classList.remove('pulsar');
        void paragrafo.offsetWidth;
        paragrafo.classList.add('pulsar');
        paragrafo.addEventListener('animationend', () => {
            paragrafo.classList.remove('pulsar');
        });
    })
})