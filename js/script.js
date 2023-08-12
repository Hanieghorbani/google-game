const emoji = document.querySelector(".emoji")
const barrier = document.querySelector(".barrier")
const body = document.querySelector("body")
const container = document.querySelector(".main")
const scoreElem = document.querySelector(".score")
let score = 0
let count = 1
let isStarting = false
body.addEventListener("click", () => {
  barrier.style.animation = "move 3s infinite linear"
  emoji.style.animation = "jump 0.5s linear"
  setTimeout(() => {
    emoji.style.animation = "none"
  }, 600)
  if (!isStarting) {
    isStarting = true
    setInterval(() => {
      score++
      scoreElem.innerText = score

      if (score > 20) {
        barrier.style.animationDuration = "2s"
      }
    }, 500)
  }
})

setInterval(() => {
  let posiEmoj = Number(
    window
      .getComputedStyle(emoji)
      .getPropertyValue("margin-bottom")
      .match(/\d+/)
  )
  let posiBar = Number(
    window.getComputedStyle(barrier).getPropertyValue("left").match(/\d+/)
  )
  if (posiEmoj < 20 && posiBar < 80 && posiBar > 0) {
    alert("game over")
  }
}, 10)

//رفع باگ برای تند تر شدن
//عوض کردن اموجی موقع باختن
