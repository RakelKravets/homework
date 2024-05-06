
// let i=0

// while(i<12){
// 	i=i+2
// 	console.log(i)
// }

// let i=11

// while(i>1){
// 	i=i-1
// 	console.log(i)
// }

// let i = 11

// do{
// 	i = i-1
// 	console.log(i)
// }while( i > 1 )

// for(let i = 2 ; i <= 12 ; i += 2 ){
// 	console.log(i)
// }

// const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple' ]

// for( let i = colors.length - 1; i>=0; i--)

// console.log( colors[i] )



// const COLOR_BLUE = "#00F";
// let color = COLOR_BLUE;
// console.log(color);


// result = prompt(как дела, [ок]);

function greet(name) {
	return `Hello ${name}`;
}

let user = 'Alex';

console.log(greet(user));




const numbers = [ 1, 2, 13, 4, 9, 16, 3, 28, 99, 10];

function checkNumbers ( array ) {

let result = ' ';
	for(let i = 0; i < array.length; i++) {
		if (array[i] > 10){
			result += array[i] + ' ';
		}
	}
		return result;	
}  
console.log(checkNumbers(numbers));


function calc(firstNumber, secondNumber, text) {
	let result;

	if (text === 'minus') {
			result = firstNumber - secondNumber;
	} else if (text === 'plus') {
			result = firstNumber + secondNumber;
	} else if (text === 'multiply') {
			result = firstNumber * secondNumber;
	} else if (text === 'divide') {
			result = firstNumber / secondNumber;
	} else {
			result = 'Invalid operation';
	}

	return result;	
}

const result = calc(5, 3, 'plus');
console.log(result);