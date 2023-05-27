'use strict'

let arr = [];

for(let i = -49; i < 50; i++) {
    arr.push(i);

}
console.log ( arr.length );
console.log ( arr );

arr.sort(() => Math.random()-0.5);
console.log (arr.sort);
let arr10 = arr.filter( el => el % 10 === 0);
console.log( arr10 );

let el0 = arr.indexOf(0);
let el25 = arr.indexOf(25);
