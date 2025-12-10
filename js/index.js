const carrousel = document.querySelector('.carrousel');
const btnAvancar = document.querySelector('.btn-avancar');
const btnVoltar = document.querySelector('.btn-voltar');

// Define o quanto vai rolar por clique
// Largura do card (280) + Gap (50)
const scrollAmount = 350+32; 

btnAvancar.addEventListener('click', () => {
    // Rola para a direita
    carrousel.scrollLeft += scrollAmount;
    console.log("avancar clicado");
    
});

btnVoltar.addEventListener('click', () => {
    // Rola para a esquerda
    carrousel.scrollLeft -= scrollAmount;
    console.log("voltar clicado");

});