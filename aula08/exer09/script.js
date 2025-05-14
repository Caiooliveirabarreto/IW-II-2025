document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
    const removeBtn = document.getElementById('removeBtn');

    // Evento para input de arquivo
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
                removeBtn.style.display = 'block';
            }
            
            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecione um arquivo de imagem válido!');
            fileInput.value = '';
        }
    });

    // Evento para botão de remover
    removeBtn.addEventListener('click', () => {
        fileInput.value = '';
        previewImage.src = '';
        previewImage.style.display = 'none';
        removeBtn.style.display = 'none';
    });
});