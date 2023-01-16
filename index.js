let elem = document.querySelector(".onee")
let btn = document.querySelector(".btn")
let poz = 0

function gir() {
    let id = setInterval(frame,10)
    function frame() {
        if (poz === 0) {
            clearInterval(id)
        }
        else {
            poz --
            elem.style.top = poz + "px"
            elem.style.left = poz + "px"
        }
    }
}
btn.addEventListener("click",() => {
    let id = setInterval(frame,10)
    function frame() {
        if (poz === 348) {
            clearInterval(id)
            gir()
        }
        else {
            poz ++
            elem.style.top = poz + "px"
            elem.style.left = poz + "px"
        }
    }
})

