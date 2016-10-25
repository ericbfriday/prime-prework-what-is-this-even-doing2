//What is this even doing! 2-4

var value = "1";

//step 1
for(var i = 0; i < 4; i++){
  value += 1;
}
console.log('step 1: ', value);

//step 2
var array = [];

for(i = 0; i < value.length; i++){
  array.push(value[i]);
}

array[0] = 5;
console.log('step 2: ', value);

//step 3
value = array.pop();
value += array.shift();

value = parseInt(value);
console.log('step 3: ', value);

//step 4
augmentA();
augmentA();
augmentA();
console.log('step 4: ', value);

//step 5
while(i > 0){
  value += 1;
  value += value;
  i--;
}
console.log("step 5: ", value);

//step 6
var a = 73;
var b = 10;
var c = "30";

a = a + b;
a = a + c;

value = value + a;
console.log("step 6: ", value);

//step 7
augmentB(value);
augmentA();
augmentB(value);

console.log('step7/Final: ', value);

function augmentA() {
  if(value > 10){
    value = 1;
  } else if(value.length > 3){
    value = 16;
  } else {
    value = "Number"
  }
}

function augmentB(val) {
	if(val > 10){
		value = 16;
	} else {
		value = 2;
	}
}

//What does value equal?
