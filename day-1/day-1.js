const fs = require('fs')

let totalCalsContainer = [];

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let allData = data.split('\n')

  let totalCals = 0; 

  allData.forEach(item => {
    if (item !== '') {
      //add to the count varible 
      totalCals = totalCals + Number(item);
    } else {
      totalCalsContainer.push(totalCals)
      totalCals = 0; 
    }
  })

  totalCalsContainer = totalCalsContainer.sort().reverse()
  console.log(totalCalsContainer[0])
  console.log(totalCalsContainer[0] + totalCalsContainer[1] + totalCalsContainer[2] )
})
