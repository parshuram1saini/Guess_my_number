'use strict'

let rand = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = rand
document.querySelector('.number').textContent = '?'
let score = 20
let highscore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    document.querySelector('.message').textContent = '🔴 No Number!'
    document.querySelector('body').style.background = 'orange'
  }

  //guess  the correct number
  else if (guess == rand) {
    document.querySelector('.message').textContent = '✓ correct number!'
    score++
    document.querySelector('.number').textContent = rand
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.background = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  }
  //guess is wrong random number
  if (guess !== rand) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > rand ? 'TOO HIGH!' : 'TOO LOw'
      score--
      document.querySelector('.score').textContent = score
      document.querySelector('body').style.background = 'aqua'
    } else {
      document.querySelector('.message').textContent = 'YOU lost the Game'
      document.querySelector('.score').textContent = 0
      document.querySelector('body').style.background = 'red'
    }
  }
  //guess is very high
  //   else if (guess > rand) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "TOO HIGH!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //       document.querySelector("body").style.background = "aqua";
  //     } else {
  //       document.querySelector(".message").textContent = "YOU lost the Game";
  //       document.querySelector(".score").textContent = 0;
  //       document.querySelector("body").style.background = "red";
  //     }
  //   }
  //   // guess is very low
  //   else if (guess < rand) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "TOO LOW!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //       document.querySelector("body").style.background = "aqua";
  //     } else {
  //       document.querySelector(".message").textContent = "YOU lost the Game";
  //       document.querySelector(".score").textContent = 0;
  //       document.querySelector("body").style.background = "red";
  //     }
  //   }
  //   //we can use the lost game  in separate
  //   //   if (guess == 0) {
  //   //     document.querySelector(".message").textContent = "YOU lost the Game";
  //   //     document.querySelector(".score").textContent = 0;
  //   //   }
})
document.querySelector('.again').addEventListener('click', function () {
  score = 20
  rand = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.number').textContent = rand
  document.querySelector('.score').textContent = score
  document.querySelector('.message').textContent = 'start guessing!..'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('body').style.background = '#222'
})
