document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('sortableList');
    const addButton = document.getElementById('addButton');
    let itemCounter = 1;

    // Adicionar novo item
    addButton.addEventListener('click', () => {
        const newItem = createListItem(`Item ${itemCounter++}`);
        list.appendChild(newItem);
        updateButtons();
    });

    // Criar elemento da lista
    function createListItem(text) {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = `
            <button class="move-btn up">↑</button>
            <button class="move-btn down">↓</button>
            <span class="item-content">${text}</span>
        `;
        return li;
    }

    // Controle dos botões
    list.addEventListener('click', (e) => {
        const target = e.target;
        const li = target.closest('.list-item');
        
        if (!li) return;

        if (target.classList.contains('up')) {
            moveItem(li, 'up');
        } else if (target.classList.contains('down')) {
            moveItem(li, 'down');
        }
    });

    // Movimentação dos itens
    function moveItem(element, direction) {
        const sibling = direction === 'up' 
            ? element.previousElementSibling 
            : element.nextElementSibling;

        if (sibling) {
            const parent = element.parentNode;
            const insertPosition = direction === 'up' 
                ? sibling 
                : sibling.nextElementSibling;
            
            parent.insertBefore(element, insertPosition);
            updateButtons();
        }
    }

    // Atualizar visibilidade dos botões
    function updateButtons() {
        const items = list.children;
        
        Array.from(items).forEach((item, index) => {
            const upButton = item.querySelector('.up');
            const downButton = item.querySelector('.down');
            
            upButton.disabled = index === 0;
            downButton.disabled = index === items.length - 1;
        });
    }

    // Adicionar itens iniciais
    for (let i = 0; i < 3; i++) {
        list.appendChild(createListItem(`Item ${itemCounter++}`));
    }
    updateButtons();
});