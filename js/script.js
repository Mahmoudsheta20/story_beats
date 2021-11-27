let items = document.querySelector('.header');
let toggle = document.querySelector('.header .toggle');

toggle.onclick = () => {

    items.classList.toggle('activ')
}




function scroll() {

    if (this.scrollY >= 50) items.classList.add('scroll');
    else items.classList.remove('scroll')
}

window.addEventListener('scroll', scroll);





























const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    // //  reset: true


})

sr.reveal(".landing", { delay: 600 })
sr.reveal(".min-head", { delay: 700 })
sr.reveal(".landing .image", { delay: 1000 })
sr.reveal(".spacs .contant", { origin: "left", interval: 100 })
sr.reveal(".spacs .image", { delay: 1000, origin: "top" })
sr.reveal(".landing .image", { delay: 1000, origin: "top" });







function scrollUp() {
    const scrollUp = document.querySelector('.up');
    if (this.scrollY >= 200) scrollUp.classList.add('activ');
    else scrollUp.classList.remove('activ')
}
window.addEventListener(
    "scroll", scrollUp)