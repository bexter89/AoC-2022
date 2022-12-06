const fs = require('fs')

// [Q] [J]                         [H]
// [G] [S] [Q]     [Z]             [P]
// [P] [F] [M]     [F]     [F]     [S]
// [R] [R] [P] [F] [V]     [D]     [L]
// [L] [W] [W] [D] [W] [S] [V]     [G]
// [C] [H] [H] [T] [D] [L] [M] [B] [B]
// [T] [Q] [B] [S] [L] [C] [B] [J] [N]
// [F] [N] [F] [V] [Q] [Z] [Z] [T] [Q]
//  1   2   3   4   5   6   7   8   9 

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let allData = data.split('\n')

  let stack1 = ['F', 'T', 'C', 'L', 'R', 'P', 'G', 'Q'];
  let stack2 = ['N', 'Q', 'H', 'W', 'R', 'F', 'S', 'J'];
  let stack3 = ['F', 'B', 'H', 'W', 'P', 'M', 'Q'];
  let stack4 = ['V', 'S', 'T', 'D', 'F'];
  let stack5 = ['Q', 'L', 'D', 'W', 'V', 'F', 'Z'];
  let stack6 = ['Z', 'C', 'L', 'S'];
  let stack7 = ['Z', 'B', 'M', 'V', 'D', 'F'];
  let stack8 = ['T', 'J', 'B'];
  let stack9 = ['Q', 'N', 'B', 'G', 'L', 'S', 'P', 'H'];

  let allStacks= [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9]

  function moveItems(quantity, fromStack, toStack) {
    console.log({quantity, fromStack, toStack})
    // copy items to be moved
    let toMove = allStacks[fromStack - 1].slice(-quantity).reverse()
    // remove them from the 'fromStack'
    allStacks[fromStack - 1].splice(-quantity)
    // add the items to the 'toStack'
    toMove.forEach(item => allStacks[toStack -1].push(item))

    console.log(
      allStacks[0][allStacks[0].length-1], 
      allStacks[1][allStacks[1].length-1],
      allStacks[2][allStacks[2].length-1],
      allStacks[3][allStacks[3].length-1],
      allStacks[4][allStacks[4].length-1],
      allStacks[5][allStacks[5].length-1],
      allStacks[6][allStacks[6].length-1],
      allStacks[7][allStacks[7].length-1],
      allStacks[8][allStacks[8].length-1],
      )
  }

  allData.forEach(move => {
    move = move.replace('move ','').replace(' from ', ',').replace(' to ', ',').split(',')
    // move _ from _ to _ 
    moveItems(Number(move[0]), Number(move[1]), Number(move[2]))
  })
})
