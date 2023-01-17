let sizeHero = 50
document.addEventListener("keydown", event => {
    if(event.code === "KeyG") {
        sizeHero += 10
        elemTwo.style.height = sizeHero + "px"
        console.log(elemTwo.style.height)
    }
    else if (event.code === "KeyH") {
        sizeHero -= 10
        elemTwo.style.height = sizeHero + "px"
        console.log(elemTwo.style.height)
        if(elemTwo.style.height === 0  + "px") {
            sizeHero = 10
            elemTwo.style.height = sizeHero + "px"
            console.log(sizeHero)
        }
    }
})