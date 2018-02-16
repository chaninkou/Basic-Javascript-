// It's like system.print.out
document.write("Basic javascript: ");

document.write("<br>");

// defining variable
var anyVariable;
anyVariable = 5;
var number1 = 4;
var anyVariable1 = true;
var anyVariable2 = "string";
var anyVariable3 = "This is a ";
// Combining string
var combineString = anyVariable3 + anyVariable2;

// Print out
document.write(combineString);

document.write("<br>");

// same thing as java of adding,substract
var totalNumber = anyVariable + number1;
document.write(totalNumber);
document.write("<br>");



// Need to understand this part
var anotherNumber = number1++;
document.write(anotherNumber);
document.write(number1);

// getting the length of a string
var sentence = "abcdef";
var length = sentence.length;
document.write(length);

document.write("<br>");

// substring
var length2 = sentence.substring(2,5);
document.write(length2);

// using array
var array = new Array(2);
array[0] = "money";
array[2] = 86;

document.write("<br>");

document.write(array[0]);

document.write("<br>");

document.write(array[2]);

document.write("<br>");

// another way for array, same as java
var array2 = new Array("hello", "world");
document.write(array2[1]);

document.write("<br>");

function displayHi(name){
	document.write("Hi " + name);
}

displayHi("jeff");
