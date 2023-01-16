let elemTwo = document.querySelector(".oneeTwo")
let btnTwo = document.querySelector(".btnTwo")
let up = 0
let bootom = 0
let right = 0
let left = 0

btnTwo.addEventListener("click", () => {
    elemTwo.style.zIndex = 1
})

document.addEventListener("keydown", event => {
    console.log("Keydown: ", event);
    if( event.code === "ArrowRight") {
        left += 10
        right -=10
        elemTwo.style.left = left + "px"
        elemTwo.style.right = right + "px"
        console.log()

    }
    else if (event.code === "ArrowDown") {
        up += 10
        bootom -= 10
        elemTwo.style.top = up + "px"
        elemTwo.style.bootom = bootom + "px"
        console.log()

    }
    else if (event.code === "ArrowUp") {
        up -= 10
        bootom += 10
        elemTwo.style.top = up + "px"
        elemTwo.style.bootom = bootom + "px"
        console.log()

    }
    else if (event.code === "ArrowLeft") {
        right += 10
        left -= 10
        elemTwo.style.right = right + "px"
        elemTwo.style.left = left + "px"
    }


    function checer(up,bootom,right,left,element) {
        if (right > 0  || left < -10) {
            element.style.right = 0 + "px"
            elemTwo.style.left = 0 + "px"
        }
        else if (up > 350 || bootom < - 350){
            element.style.top = 350 + "px"
            element.style.bootom = -350 + "px"
        }
        else if (up < 0  || bootom > 0){
            element.style.top = 0 + "px"
            element.style.bootom = 0 + "px"
        }
        else if (left > 350 || right < - 350){
            element.style.right = -350 + "px"
            element.style.left = 350 + "px"
        }
      }
      checer(up,bootom,right,left,elemTwo)
  });

