//alert('Hello World');
//Variable declaration
// Number functions follow BIDMAS rule. I stands for index (means power functions)
console.log('***Variable declaration***');
let firstName= 'Sujith';
let lastName= 'Sudhakaran';
let fullName= firstName+' '+lastName;

console.log(fullName);
console.log(fullName[0]);

//This is a immutable variable example
const age=37;
console.log(age);

//This is a method example
console.log('***This is a method example***');
fullNameUC= fullName.toUpperCase();
console.log(fullName.toUpperCase());
console.log(fullNameUC);

// String FUnctions
console.log('***String Functions***');
console.log(fullName.substr(0,6)); //open range on last
console.log(fullName.indexOf('h'));

// Template literal example
    //concatenation method
console.log('***Normal concatenation vs template literals***');
let bones=234;
let species= "Human";
let fact= "The "+ species+ " body has "+bones+" bones.";
console.log(fact);

//This is how you would do it via template literal. Note ` instead of ' or "
console.log(`The ${species} body has ${bones} bones.`);

//Can be used to create html templates
console.log('***html templates using template literals***');
let html= `
<h2> ${species}</h2>
<p2> ${bones} </p2>
<span> The ${species} body has ${bones} bones. </span>

`;
console.log(html);

//arrays in js are objects
console.log('***arrays and array methods***');

let toys = ['tigger','poo','christopher'];
toys[1]='doraemon';

console.log(toys[1]);

//array methods

let toyCollection= toys.join('-');
let position=toys.indexOf('doraemon');
let bigtoys=toys.concat(['carmen','vir']);
console.log(toyCollection, position, bigtoys);

//returns the length of new array after introducing a vaue. pop o/ps the value popped out.
result= toys.push("spongebob");
console.log(result);
result= toys.pop();
console.log(result);

//comparison type: loose (==)
console.log("***strict vs loose comparison***");
console.log(25=='25'); //returns true
console.log(25!='25'); //returns false

console.log(25==='25'); //returns false
console.log(25!=='25'); //returns true

// Type conversion
console.log("***Type conversion***");
let score='100';
console.log(score+1, typeof score);
score=Number(score);
console.log(score+1, typeof score);

num=100;
console.log(num, typeof num);
num=String(num)
console.log(num, typeof num);
bool='0'
console.log(bool, typeof bool);
bool=Boolean(bool)
console.log(bool, typeof bool);
bool='0';
bool=Boolean(Number(bool));
console.log(bool, typeof bool);