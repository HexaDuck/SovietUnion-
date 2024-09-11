// Função de busca para o inventário de cidadãos
function searchObject() {
    // Pegando o valor de entrada de pesquisa
    const input = document.getElementById('searchInput').value.toLowerCase();
    
    // Pegando todos os objetos (cidadãos) na lista
    const objects = document.querySelectorAll('#objectList .object');
    
    // Iterar sobre os objetos para verificar se o nome corresponde à busca
    objects.forEach((object) => {
        const name = object.getAttribute('data-name').toLowerCase();
        
        // Exibir ou ocultar o objeto com base na correspondência
        if (name.includes(input)) {
            object.style.display = '';
        } else {
            object.style.display = 'none';
        }
    });
}
