let score  = 33  //number
let sc = "33 "   // string can be convert in  number 


//convrt string value in number
let tonum = Number(sc) 
let a = "33abe"   //if we convert in number this covnvert iin NaN
let b = null      //if convert in number gives 0
let x = true      // convert in 1 for false it is 0
console.log(typeof score)
console.log(typeof sc)
console.log(typeof tonum)
let tonum1 = Number(a)
let tonum2 = Number(b)
console.log(typeof tonum1)
console.log(typeof tonum2)


// "33"==>33
// "33sd"==> NaN

//convert 1 in bool gives true

let q = 1
let convInbool = Boolean(q)
console.log(convInbool)

//convert string in bool
// empty string ==> false
///filled string ==> true