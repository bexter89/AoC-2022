const fs = require('fs')

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let allData = data.split('\n')
  // let allData = [
  //   ['2-4','6-8'],
  //   ['2-3','4-5'],
  //   ['5-7','7-9'],
  //   ['2-8','3-7'],
  //   ['6-6','4-6'],
  //   ['2-6','4-8']
  // ];

  let count = 0;

  allData.forEach(sectionAssigment => {
    let elves = sectionAssigment.split(',')
    let elf1Range = elves[0].split('-')
    let elf2Range = elves[1].split('-')

    console.log({elf1Range, elf2Range})
    let elf1RangeLow  = elf1Range[0]
    let elf1RangeHigh = elf1Range[1]
    let elf2RangeLow  = elf2Range[0]
    let elf2RangeHigh = elf2Range[1]

    // if the range doesnt span more than one num
    if (elf1RangeLow === elf1RangeHigh) {
      let elf1Num = elf1RangeLow;
      if (elf2RangeLow <= elf1Num && elf2RangeHigh >= elf1Num ) {
        count++;
      } 
      return; 
    }
    if (elf2RangeLow === elf2RangeHigh) {
      let elf2Num = elf2RangeLow;
      if (elf1RangeLow <= elf2Num && elf1RangeHigh >= elf2Num ) {
        count++;
      } 
      return;
    }

    // if the low range of elf 1 is less than the lower range of elf 2, AND 
    // the high range of elf 1 is higher than the high range of elf 2, increment count
    if (elf1RangeLow <= elf2RangeLow && elf1RangeHigh >= elf2RangeHigh ) {
      console.log('⚡️ condition met: 1 contains 2')
      count++;
    } 
    // if the low range of elf 2 is less than the lower range of elf 1, AND 
    // the high range of elf 2 is higher than the high range of elf 1, increment count
    else if (elf2RangeLow <= elf1RangeLow && elf2RangeHigh >= elf1RangeHigh ) {
      console.log('✨ condition met: 2 contains 1')
      count++;
    }
  })
  
  console.log(count)
})
