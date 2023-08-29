const input = document.querySelector('#result')
const button = document.querySelectorAll("button")
const dark = document.querySelector(".dark-mode")
let arr = Array.from(button)
let string = "";

dark.addEventListener("click",() => {
    let randomRed = Math.random() * 255;
    let randomBlue = Math.random() * 255;
    document.querySelector("body").style.background = `rgb(255,${randomBlue},${randomRed})`
})

arr.forEach((btn) => {
    btn.addEventListener("click" ,(e) => {
        if(e.target.innerText == "="){
            string = eval(string)
            input.value = string
        }
        else if(e.target.innerText == "C"){
            string = "";
            input.value = string
        }
        else if(e.target.innerText == "DE"){
            string = string.substring(0,string.length-1)
            input.value = string;
        }
        else{
            string+= e.target.innerText
            input.value = string
        }
    })
})