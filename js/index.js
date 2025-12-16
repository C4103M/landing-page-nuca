const carrousel = document.querySelector('.carrousel');
const btnAvancar = document.querySelector('.btn-avancar');
const btnVoltar = document.querySelector('.btn-voltar');

// Define o quanto vai rolar por clique
// Largura do card (280) + Gap (50)
const scrollAmount = 350 + 32;

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

// Carrousel inicial
const div_carrousel = document.querySelector(".sec1-content-img");
const urls = [
    "../../img/sec1-carrousel/image1.png",
    "../../img/sec1-carrousel/image2.png",
    "../../img/sec1-carrousel/image3.png",
    "../../img/sec1-carrousel/image4.png",
    "../../img/sec1-carrousel/image5.png"
];

let index = 1;

setInterval(() => {
    div_carrousel.style.backgroundImage = `url('${urls[index]}')`;
    // console.log("Index: " + index)
    index = (index + 1) % urls.length; // volta ao começo
}, 5000);


// Toogle 

let tg_mej = document.querySelector("#toggle-mej")
let tg_partness = document.querySelector("#toggle-partners")
let mej_container = document.querySelector(".mej-container")
let partners_container = document.querySelector(".partner-container")
function verificar_tg() {
    if (tg_mej.checked == true) {
        mej_container.style.display = "flex";
        partners_container.style.display = "none";
    }
    else if (tg_partness.checked == true) {
        partners_container.style.display = "flex";
        mej_container.style.display = "none";
    }
    console.log("Ta indo");
    
}