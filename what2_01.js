//What is this even doing! 2-1

var value = 10;

var a = 27;

//step 1
var i = 5;

while(i < 35){
  value = value + a;
  i += a;
}
console.log(value);

//step 2
var b = "56";

value = value + b;
value = parseInt(value);
value = value + parseInt(b);
console.log(value);

//step 3
if(value > 5000){
	value = 3;
} else if(value > 6500){
	value = 2;
} else {
	value = 1;
}	
console.log(value);

//step 4
var array = [a, b, value];

for(i = 0; i < array.length; i++){
	value += i;
}
console.log(value);

//step 5
array[1] = parseInt(array[1]);

var c = 0;

for(i = 0; i < array.length; i++){
	c += array[i];
}
console.log(value);

//step 6
augmentA();

for(i = 0; i < array.length; i++){
	value += array[i];
}

//step 7
array[0] = a;
array.push(a + c);

value = array[array.length - 1];

//step 8
array.push(8);

value += array.length;

function augmentA() {
	a = 10;
	b = 20;
	c = 50;
}
console.log(value);
//What does value equal?