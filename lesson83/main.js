
const user = {
	name : 'Rakel',
	age : 28 ,
	favoriteColor : 'green' , 
	iaAdmin : true , 
	sayHello(text){
		console.log(`Hello ${text}`)
	}
}
console.log( user.favoriteColor);
console.log ( user.sayHello('Kitty'));

const users = [
	{
		name : 'Rakel',
		age : 28 ,
		favoriteColor : 'green', 
		isAdmin : true
	},
	{
		name : 'Andrey',
		age : 25 ,
		favoriteColor : 'black',
		isAdmin : false
	},
	{
		name : 'Munira',
		age : 28 ,
		favoriteColor : 'red' ,
		isAdmin : false
	}
]

let userCount = 0;

for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    userCount++;
  }
}
