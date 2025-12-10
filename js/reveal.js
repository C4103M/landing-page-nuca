const revelar = ScroolReveal({reset: true})

let sec1_title = document.querySelector("#sec1-title")
let sec1_subtitle = document.querySelector("#sec1-sub")
let sec1_btn = document.querySelector(".sec1-content-btn")

revelar.reveal(
    "#sec1-title"
)