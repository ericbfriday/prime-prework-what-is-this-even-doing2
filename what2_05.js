//What is this even doing! 2-5

var value = 3;

//step 1
var a = 13;
var b = 52;
var c = 46;

if(c < b && c > a){
	value = 10;
} else if(b < c || value < c) {
	value = 10 / 2;
} else {
	value = 10 * 2;
}
console.log("value after step 1: ", value);

//step 2
augmentA();
augmentB();
console.log("value after step 2: ", value);

//step 3
var array = [];
value = value.toString();

for(var i = 0; i < value.length; i++){
	array[i] = value.charAt(i);
}

value = array[3];
value = value + array.shift();
value = value + array.pop();
console.log("value after step 3: ", value);

//step 4
value = value.toString();
value += "5";

parseInt(value);
augmentA();
console.log("value after step 4: ", value);

//step 5
array = [26,75,42,"39"];

value = value + array[0] * array[2] + array[3];
console.log("value after step 5: ", value);

//step 6
for(i = 0; i < value.length; i++){
	array[i] = value[i];
}

value = array[array.length - 1];
value = value + array[1];
console.log('step 6: ', value);


//step 7
if(value == 90){
	value = 2;
}
console.log("value after step 7: ", value);

//step 8
value = value * parseInt(array[2]);
console.log("value after step 8: ", value);

function augmentA(){
	if(value <= 10){
		value = 100;
	} else {
		value = 5;
	}
}

function augmentB(){
	var i = 3;

	while(i < 35){
	  value = value * a;
	  i += a;
	}
}
