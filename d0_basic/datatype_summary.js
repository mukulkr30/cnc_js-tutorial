// how data type stored in memory 

// 1 premitive (string ,number,boolean,null,undefined,NaN,symbol)->7   alsoo bigint
// 2 reference or non premitive (array, objects,functions)

const ar = [1,2,3,4,5]

const obj = {
    name:"mukul",
    age:23,
}
console.log(ar)
console.log(obj)


//  memory in js
// stack(store premitive data type)   not change at origional place  
// heap(store non-premitive data type) change at origional place

let a = 2
let y = a
y = 3
console.log(a)    //changing in y don't change the value in a
console.log(y)

let z = {
    name :"mukul",
    age: 20,
}
let x = z
x.age = 21

console.log(z.age)    //changing in x change the value in z because both reference the same memory at heap
console.log(x.age)