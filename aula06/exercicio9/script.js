document.addEventListener('DOMContentLoaded', function(){
    let paragrafo = document.getElementById('Paragrafo');
    let TamanhoAtual = parseInt(paragrafo.style.fontSize);
    document.getElementById('AumentaParagrafo', this.addEventListener('click', function(){
        TamanhoAtual++;
        String(TamanhoAtual);
        paragrafo.style.fontSize = TamanhoAtual + 'px';
    }))
})
    
