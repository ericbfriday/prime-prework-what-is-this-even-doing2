//What is this even doing! 2-3

var value = 2;

//step 1
var a = 75;
var b = 52;
var c = 46;

if(a > b && c > a){
	value = 10;
} else if(b < c || value < c) {
	value = 10 / 2;
} else {
	value = 10 * 2;
}
console.log(value);
//step 2
augmentA();

value += (a + b + c);
console.log(value);
//step 3
augmentA();

value += (a + b + c);
console.log(value);
//step 4
var a = "65"

value += a;
a = parseInt(a);
value = parseInt(value);
value += a;
console.log(value);
//step 5
if(value > 8000){
	value = 3;
} else {
	value = 5;
}

value = value.toString()
value = value + value + value;
console.log(value);

//step 6
augmentB(value);

value = value / 111;
console.log(value);

//step 7
if(value == 6){
	value = value.toString();
	var b = "87";
	value += b;
} else if (value == 3){
	value = value.toString();
	var b = "78";
	value += b;
} else {
	value = value.toString();
	var b = "0";
	value += b;
}

value += "0";
console.log(value);
//step 8
var array = [];

for(i = 0; i < value.length; i ++){
	array.push(parseInt(value.charAt(i)));
}

value = 0;

for(i = 0; i < array.length; i ++){
	value += array[i];
}

function augmentA() {
	a = a/5;
	b = b/2;

	if(c >= 23){
		c = c/23;
	} else {
		c = 23;
	}
}

function augmentB(val) {
	val = val * 2;
}

//What does value equal?
console.log(value);