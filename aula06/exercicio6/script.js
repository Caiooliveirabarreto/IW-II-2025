function alteraConteudo(idElemento){
    let div = document.getElementById(idElemento)
    div.innerHTML = "<h1> titulo </h1> <p> paragrafo </p>";
}

alteraConteudo('Div');
