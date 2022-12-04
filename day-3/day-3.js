const fs = require('fs')

const priorities = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I:35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
}

function findPriority(letter) {
  //97 - 122 for lowercase
  if (letter.charCodeAt(0) >= 97) {
    return letter.charCodeAt(0) - 96
  } else { // 65 - 90 for uppercase
    return letter.charCodeAt(0) - 64 
  }
}

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  const allData = data.split('\n');
  
  let sum = 0;
  allData.forEach(rucksack => {
    let middle = rucksack.length/2;
    let container1 = rucksack.slice(0, middle)
    let container2 = rucksack.slice(middle)
  
    for (let i = 0; i < container1.length; i ++) {
      let item = container1[i];
      if (container2.includes(item)) {
        sum = sum + priorities[item];
        break;
      }
    }
  });
  console.log(sum)
})

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  const allData = data.split('\n');
  let sum = 0;
  
  for (let i = 0; i < allData.length; i += 3) {
    let elf1 = allData[i];
    let elf2 = allData[i + 1];
    let elf3 = allData[i + 2];

    // set default values for longest middle and shortest.
    let longest = elf1;
    let middle = elf2;
    let shortest = elf3; 

    // reassign based on length 
    if (longest.length < middle.length) {
      if (middle.length > shortest.length) {
        longest = elf2;
        middle = elf3; 
        shortest = elf1;
      } else {
        longest = elf3;
        middle = elf2; 
        shortest = elf1;
      }
    };

    for (let i = 0; i < longest.length; i++) {
      let item = longest[i]
      if (shortest.includes(item) && middle.includes(item)) {
        sum = sum + priorities[item];
        break;
      }
    }
  }
  console.log(sum)    
})
