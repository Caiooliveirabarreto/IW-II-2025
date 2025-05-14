document.addEventListener('DOMContentLoaded', function(){
    const btnEfeito = document.getElementById('btn_efeito');
    btnEfeito.addEventListener('click', function(){
        const container = document.getElementById('container');
            container.innerHTML = ''; // Limpa quadrados anteriores

            for(let i = 0; i < 5; i++) {
                const quadrado = document.createElement('div');
                quadrado.className = 'quadrado';
                // Gera cor aleatória em RGB
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                
                quadrado.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                container.appendChild(quadrado);
            }
    })
})