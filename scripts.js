//scripts.js

/*
var array = ['HTML', 5, 'World', 9.99, {name: 'Piotr'}, 99];
console.log(array.length); 
// It will display 6


var array = ['aaa', [2.55, 'bbb', [5] ] ];
var stringWithArray = array.toString();

console.log(stringWithArray);  
// "aaa, 2.55, bbb, 5"

var array = ['aaa', [2.55, 'bbb', [5, {id: 'hello' } ] ] ];
var stringWithArray = array.toString();

console.log(stringWithArray);  // "aaa, 2.55, bbb, 5, [object Object]"

var test = [ 'aaa', 2.55, 'bbb', 5 ];
var testToString = test.join(' | ');

console.log(testToString); // aaa | 2.55 | bbb  | 5

var test = ['a', 'b', 'c'];
test[3] = 'd';

var test = ['a', 'b', 'c'];
var x = test.push('d');

var test = ['a', 'b', 'c'];
var x = test.pop();

var array = ['a', 'b', 'c'];
array.splice(index, elements, new1, new2, … , newX);

/*var array = ['a', 'b', 'c'];
array.splice(1, 0, 'x', 'y', 'z');

console.log(array);


var array = ['a', 'x', 'y', 'z', 'b', 'c'];
var x = array.splice(2, 2);

console.log(array);  //  ['a', 'x', 'b', 'c']
console.log(x);  //  ['y', 'z']


var test = [1, 2, 3];
var test2 = ['a', 'b', 'c'];
var test3 = ['x', 'y', 'z'];
var arr = test.concat(test2,test3);

console.log(arr);  //  [1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z'];


var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola'];
var indexOfOla = names.indexOf('Ola');

console.log('The search value is on ' + indexOfOla + ' position');
console.log(names[indexOfOla]);*/

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var newName = 'Marian';

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

if (allNames.indexOf(newName) === -1) {
	var newIndexOfArray = allNames.push(newName);
}  else {
	console.log('...');
}