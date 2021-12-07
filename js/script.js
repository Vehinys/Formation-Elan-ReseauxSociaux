const carres = document.querySelectorAll(".carre")

carres.forEach(carre => {
    carre.addEventListener("click", function() {
        carre.classList.toggle("active")
    })
})

function changeBgColor(color){
    const bodys = document.querySelector('body');
    bodys.style.background = color;
}
