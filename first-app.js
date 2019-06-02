const fs = require('fs');
fs.writeFileSync('test.txt','hello boi')
console.log('hello')


// Spread operator
const array = ["1","2","3"]
	const newArray = [...array]
console.log(newArray)

// Rest operator
const toArray = (...args) => {
	return args
}
console.log(toArray(1,2,3))

//Destructuring

const person = {
    name:'Ramandeep singh',
    age:26
}

const destructuringExample = ({name})=>{
    return name
}

console.log(destructuringExample(person))


