// , will count as number
document.write("1+2 = ", 1 + 2, "<br />");

// + will be a string
document.write("1+2 = " + 1 + 2, "<br />");

// the max and min
document.write("Max number = ", Number.MAX_VALUE, "<br/>");
document.write("Min number = ", Number.MIN_VALUE, "<br/>");

// how to round
var val1 = 12.1341;
document.write("How to round: ", val1.toFixed(2), "<br/>");

// shortcut(not that useful)
var val2 = 2;
document.write("val2++ = ", val2++, "<br />");
document.write("val2 = ", val2, "<br />");

// more shortcut for numbers(same for -=,*=, /=)
var val3 = 3;
document.write("val3 += 3", val3 +=3, "<br />");

// Some math function
document.write("Math.E = ", Math.E, "<br />");
document.write("Math.PI = ", Math.PI, "<br />");
document.write("Math.abs(-2) = ", Math.abs(-2), "<br />");
// cube root, round 
document.write("Math.cbrt(4) = ", Math.cbrt(4), "<br />");
document.write("Math.floor(1.23) = ", Math.floor(1.23), "<br />");
document.write("Math.ceil(1.23) = ", Math.ceil(1.23), "<br />");
document.write("Math.round(1.23) = ", Math.round(1.23), "<br />");
document.write("Math.log(1.23) = ", Math.log(1.23), "<br />");
document.write("Math.pow(2,3) = ", Math.pow(2,3), "<br />");
document.write("Math.sqrt(2,3) = ", Math.sqrt(69), "<br />");

// how to make random number
document.write("Random number from (1-100) = ", Math.floor((Math.random() * 100) + 1), "<br />");

// how to convert string into a number
document.write("Convert string into int: \"5\"= ", parseInt("5"), "<br />");

// how to convert a number to string
document.write("Convert number into string: (5) = ", Number("5"), "<br />");

// how to get get the length of the strin
var var4 = "awjdl" + "awddwaddd";
document.write("string length: ", var4.length, "<br />");

// how to get the index
document.write("Index of ", var4.indexOf("l"), "<br />");
document.write("var4.slice: ", var4.slice(2), "<br />");
document.write("var4.substr: ", var4.substr(2,2), "<br />");
// replace
document.write("var4.replace: ", var4.replace("awjdl", "replaced "), "<br />");

// to upper case
document.write("var4 upper case: ", var4.toUpperCase(), "<br />");

// to lower case
document.write("var4 lower case: ", var4.toLowerCase(), "<br />");

// different way to style it like bold,italics,color
var styleThis = "something"
document.write("Bold: ", styleThis.bold(), "<br />");
document.write("Big: ", styleThis.big(), "<br />");
document.write("Color: ", styleThis.fontcolor("green"), "<br />");
document.write("size: ", styleThis.fontsize("10em"), "<br />");
document.write("Italics: ", styleThis.italics(), "<br />");

// link
document.write("Link of my website: ", styleThis.link("http://chanincode.tk"), "<br />");

// more style
document.write("Small: ", styleThis.small(), "<br />");
document.write("Strike: ", styleThis.strike("green"), "<br />");
document.write("Sub: ", styleThis.sub("10em"), "<br />");
document.write("sup: ", styleThis.sup(), "<br />");

// ===, ==, != if and else statement
var numberOfpeople = 2;
if((numberOfpeople >= 4) && (numberOfpeople <= 10)){
	document.write("There are a lot of people" + "<br />");
}else if (numberOfpeople > 20){
	document.write("Too many people" + "<br />");
} else {
	document.write("Not enough people" + "<br />");
}

// or and !
document.write("true or false: ", true || false , "<br />");

// how to put "" inside "" 
document.write("\"10\" == 10 = ", ("10" == 10), "<br />");
document.write("\"10\" === 10 = ", (10 === 10), "<br />");

// using switch statement

var something2 = 2;

switch(something2) {
	case 1:
		document.write("YES" + "<br />");
		break;
	case 2:
		document.write("NO" + "<br />");
		break;
	default :
		document.write("MAYBE" + "<br />");
}

// short using ? condition

var something3 = 3;
var something4 = (something3 >= 3) ? true : false;

document.write(something4 + "<br />");

// using while loop
var i = 0;
while(i < 3){
	document.write(i + "<br />");
	i++;
}

// using do and while like java
do{
	var type1 = prompt("Type 1 to log in");
}while(type1 != 1)
	
alert("you have logged in!");

// for loop
for(k = 0; k<= 30; k++){
	if((k % 2) === 0){
		continue;
	}
	if(k === 11){
		break;
	}
	document.write(k + "<br />");
}

// key value pair
var student = {name : "Michael", lastname : "happy", money : 40.40};

// for in block
for(j in student){
	// reference
	document.write(student[j] + "<br />");
}

// array
var pet = ["dog", "bobby", 150.50];

document.write("first index ",pet[0], "<br />");

pet[3] = "mine";

pet.splice(2,1, "Emily", "CA");

document.write("Pet: ",pet.valueOf(), "<br />");

document.write("Pet: ",pet.join(", "), "<br />");

// delete
delete pet[3];

// testing to see if delete works
for(j in pet){
	// reference
	document.write(pet[j] + "<br />");
}

var someNumber = [10,7,6,4,2,1];

// sorting numbers
// starting with the lowest number and use y - x for descending 
someNumber.sort(function(x,y){return x - y});

// using tostring is much easier than using for loop to print something
document.write("sorted:", someNumber.toString(), "<br />");


// how to combine two array
var combineArr = someNumber.concat(pet);

document.write("sorted:", combineArr.toString(), "<br />");




