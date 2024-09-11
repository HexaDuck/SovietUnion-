// Função para alternar entre as abas (páginas)
function showPage(pageId) {
    // Ocultar todas as páginas
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // Exibir a página selecionada
    document.getElementById(pageId).style.display = 'block';
}

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

// Inicializar a página exibindo a primeira aba ao carregar o site
window.onload = function() {
    showPage('Cidadões');  // Mostra a primeira aba (Lista de Cidadões) ao iniciar
};
