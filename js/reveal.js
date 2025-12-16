const revelar = ScrollReveal({ reset: true })

let sec1_title = document.querySelector("#sec1-title")
let sec1_subtitle = document.querySelector("#sec1-sub")
let sec1_btn = document.querySelector(".sec1-content-btn")
let cards = document.querySelector(".cards")
let quem_somos = document.querySelector(".title-s2")
let quem_somos_txt = document.querySelector(".p-sec2")
let card_infos = document.querySelector(".sec2-2-info")
let mapa = document.querySelector(".sec2-2-mapa")
let sec3_carrousel = document.querySelector(".sec3-container-carrousel")

// Sessão 1
revelar.reveal(sec1_title, { duration: 1000, distance: '90px' });
revelar.reveal(sec1_subtitle, { duration: 2000, distance: '90px' });
revelar.reveal(sec1_btn, { duration: 3000, distance: '90px' });

const isMobile = window.innerWidth < 768;

// Sessão 2
revelar.reveal(cards, {
    rotate: { x: 80, y: 0, z: 0 },
    duration: 2000
});
revelar.reveal(quem_somos, {
    origin: 'left',
    distance: '100%',
    duration: 1000,
    easing: 'ease-out',
    opacity: 0
});
revelar.reveal(quem_somos_txt, {
    origin: 'left',
    distance: '100%',
    duration: 1000,
    easing: 'ease-out',
    opacity: 0,
});
// Sessão 2.2

revelar.reveal(card_infos,{
    origin: 'right',
    distance: '100%',
    duration: 3000,
    rotate: { x: 80, y: 0, z: 0 },
    viewFactor: isMobile ? 0.0 : 0.5
})
revelar.reveal(mapa, {
    duration: 4000,
    viewFactor: isMobile ? 0.0 : 0.5
});

// Sessão 3
revelar.reveal(sec3_carrousel,{
    duration: 3000, 
})