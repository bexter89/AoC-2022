const fs = require('fs')

// A || X = Rock 1
// B || Y = Paper 2 
// C || Z = Scissors 3

// win = 6
// draw = 3
// loss = 0

// The score is the score for the shape you selected
// plus the score for the outcome of the round.

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let allData = data.split('\n')
  let score = 0

  allData.forEach(round => {
    round = round.split(' ')
    let opponent = round[0]
    let me = round[1]
    
    if (me === 'X') {
      score = score + 1
    }
    if (me === 'Y') {
      score = score + 2
    }
    if (me === 'Z') {
      score = score + 3
    }

    if (opponent === 'A') {
      if (me === 'X') {
        score = score + 3
      }
      if (me === 'Y') {
        score = score + 6
      }
    }
    if (opponent === 'B') {
      if (me === 'Y') {
        score = score + 3
      }
      if (me === 'Z') {
        score = score + 6
      }
    }
    if (opponent === 'C') {
      if (me === 'Z') {
        score = score + 3
      }
      if (me === 'X') {
        score = score + 6
      }
    }
  })
  console.log(score)
})


fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let allData = data.split('\n')
  let score2 = 0

  allData.forEach(round => {
    round = round.split(' ')
    let opponent = round[0]
    let gameResult = round[1]
    
    if (opponent === 'A') { // opponent plays rock
      if (gameResult === 'X') { // lose, play scissors
        score2 = score2 + 0 + 3
      }
      if (gameResult === 'Y') { // draw , play rock
        score2 = score2 + 3 + 1
      }
      if (gameResult === 'Z') { // win, play paper
        score2 = score2 + 6 + 2
      }
    }
    if (opponent === 'B') { // opponent plays paper
      if (gameResult === 'X') { // lose, play rock
        score2 = score2 + 0 + 1
      }
      if (gameResult === 'Y') { // draw, play paper
        score2 = score2 + 3 + 2
      }
      if (gameResult === 'Z') { // win, play scissors
        score2 = score2 + 6 + 3
      }
    }
    if (opponent === 'C') { // opponent plays scissors
      if (gameResult === 'X') { // lose, play paper
        score2 = score2 + 0 + 2
      }
      if (gameResult === 'Y') { // draw, play scissors
        score2 = score2 + 3 + 3
      }
      if (gameResult === 'Z') { // need to win, play rock
        score2 = score2 + 6 + 1
      }
    }
  })
  console.log(score2)
})