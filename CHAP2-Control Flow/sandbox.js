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
