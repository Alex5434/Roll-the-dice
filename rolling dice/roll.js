let rollp = document.getElementById("ple-ro")
let num = document.getElementById("roll-num")
let btn = document.getElementById("roll-btn")
let rst = document.getElementById("rst-btn")

function rolldice()
{
  rollp.innerHTML = "Here's your number"
  let randomNum =Math.floor( Math.random()*6) +1
  num.innerText = randomNum
  btn.innerText = "roll again"
}

function reset()
{
    num.innerText = 0
    rollp.innerHTML = "Please press the roll button!"
    btn.innerText = "roll"
}
