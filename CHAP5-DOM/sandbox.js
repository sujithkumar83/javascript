console.log('***DOM***');

//select one item
const para=document.querySelector('p');
console.log(para);
console.log(para.innerText);
para.innerText='this is the truth';
const para2=document.querySelector('div.error');
console.log(para2);

//select multiple items
const paras=document.querySelectorAll('p');
console.log(paras);
console.log(paras[2]);

paras.forEach((parag)=> console.log(parag));

const errors=document.querySelectorAll('.error');
console.log(errors);


// These are other methods to collect tag names. Maybe not as efficient as the above. 
//get element by ID
const title =document.getElementById('Page-Title');
console.log(title);
//get alement by class name. This returns a html collection. so forEach wont work on it. 
const error=document.getElementsByClassName('error');
console.log(error);
//Get lement by their tag name
const par= document.getElementsByTagName('p');
console.log(par);
