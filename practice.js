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
document.write("Link of my website: ", styleThis.link("http://chanincode.tk"), "<br />");









