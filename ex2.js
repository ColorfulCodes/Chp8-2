const fs = require('fs');

let listOfNames =fs.readFileSync('csv.txt', 'utf8')

function separate (contents) {
  console.log(listOfNames)


  //let b = a.split("\n")
  //let b = a.join("\n");
  let love = prompt("Que quieres? ")
  console.log(love);
	console.log("Last" + "  " + "First" + "  "+ "Salary");
	console.log("-----------------------------");
  let a = contents.replace(/,/g,"    ")
	return a
};
console.log(separate(listOfNames))
