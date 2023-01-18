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
        console.log(left,right)

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
        if (right > 0  || left < -10) {
            // return right = 0,left = 0,element.style.right = 0 + "px",elemTwo.style.left = 0 + "px"
            right = 0
            left = 0
            elemTwo.style.right = 0 + "px"
            elemTwo.style.left = 0 + "px"
        }
        else if (up > 350 || bootom < - 350){
            // return up = 350,bootom = -350,element.style.top = 350 + "px",element.style.bootom = -350 + "px"
            up = 350
            bootom = -350
            elemTwo.style.top = 350 + "px"
            elemTwo.style.bootom = -350 + "px"
        }
        else if (up < 0  || bootom > 0){
            // return up = 0,bootom = 0,element.style.top = 0 + "px",element.style.bootom = 0 + "px"
            up = 0
            bootom = 0
            elemTwo.style.top = 0 + "px"
            elemTwo.style.bootom = 0 + "px"
        }
        else if (left > 350 || right < - 350){
            // return right = -350,left = 350,element.style.right = -350 + "px",element.style.left = 350 + "px"
            right = -350
            left = 350
            elemTwo.style.right = -350 + "px"
            elemTwo.style.left = 350 + "px"
        }
        else if (elemTwo.style.top === 150 + "px" && elemTwo.style.bootom === -150 + "px" && elemTwo.style.left === 170 + "px" && elemTwo.style.right === -170 + "px") {
            console.log("ТЫ В ЦЕНТРЕ!!!!")
        }
      console.log(up,bootom,left,right)
  });

