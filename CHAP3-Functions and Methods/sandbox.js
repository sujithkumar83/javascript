// Functions and declaration

console.log('***functions***');
//Function Declaration-is hoisted
console.log('***functions declaration***');

newFunc('morning','mario');

function newFunc(time="night", name='sujith'){
    console.log(`hello ${name}, good ${time}!`);
}

//Function Expression example-is not hoisted
console.log('***function expression***');
const greet=newFunc('afternoon','julio');

// Returning Values

const area=function areaCircle(radius){
    return 3.14*radius**2;
}
console.log(area(2));

// Arrow functions
const area2= radius=> radius**2*3.14;

console.log(area2(4));


// Functions vs Methods
// Methods are functions defined on data objects

// Foreach method and callbacks
let people= ['luigi', 'mario', 'johnny', 'marco','philip'];

const logPerson=(person, index)=> console.log(`Hello ${person} with index ${index}`);

people.forEach(logPerson);