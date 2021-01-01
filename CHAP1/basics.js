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


//Flow control
console.log("***Flow Control***");
    //for loop

for(let i=0; i<5; i++){
    console.log(`This is ${i}th iteration!`);
    
}

    //while loop
let i=0;
toys = ['tigger','poo','christopher'];
while(i<toys.length){

    console.log(`<div>${toys[i]}</div>`);
    i++;
}

    //do while loop
i=0;
toys = ['tigger','poo','christopher'];
do{
    
    console.log(`<div>${toys[i]}</div>`);
    i++;
}while(i<toys.length)

    //if(condition) {} else if(condition){} else {}

//Logical Operators: AND: &&; OR: ||; NOT: !;

//Break and continue

const scores=[63,35,86,0,50,34,28,100,38,56, 92,57,97,100,39];

for(i=0;i<scores.length;i++){
    // moves to the next iterations w/o stepping into next steps
    if(scores[i]===0) {
        continue;
    }
    console.log(`your score is ${scores[i]}!`);
    // breaks out of the loop if consition is satisfied stepping into next steps
    if(scores[i]===100){
        console.log("Congrats you have the top score!");
        break;
    }
}

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

//Object Literals

//Object Literals
let user = {
    name: 'sk',
    age: 37,
    email: 'sujith.kumar83@outlook.com',
    location:'Gurgaon',
    aliase:['sk', 'unni']
};

console.log(user);

let key='name';
console.log(user[key]);
console.log(user['name']);
console.log(user.name);

    //chnage values
user.name='sujith';
console.log(user.name);
console.log(typeof user);

//Addding methods to object

user = {
    name: 'sk',
    age: 37,
    email: 'sujith.kumar83@outlook.com',
    location:'Gurgaon',
    aliase:['sk', 'unni'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('user logged out');
    },
    greetUser: function(){
        console.log(`Hello ${this.name}! Welcome. Your aliases are:`);
        this.aliase.forEach((alias)=>console.log(alias)); //callback example

    }
};
user.login();
user.greetUser();

/* these examples are equivalent. The latter is a shortcut

greetUser: function(){
        console.log(`Hello ${this.name}! Welcome. Your aliases are:`);
        this.aliase.forEach((alias)=>console.log(alias)); //callback example

    }

greetUser(){
        console.log(`Hello ${this.name}! Welcome. Your aliases are:`);
        this.aliase.forEach((alias)=>console.log(alias)); //callback example

    }
    */

    //object in arrays

const family={
    name: 'nairs',
    religion: 'hindu',
    members:[
        {
            fname:'Sujith',
            hier: 'Son',
            age: '37',
            gender: 'M',
            location: 'Ireland'
        },
        
        {
            fname:'Susha',
            hier: 'Daugther',
            age: '36',
            gender: 'F',
            location: 'India'
        }
    ]

}

console.log(family.members);


//Math Object

