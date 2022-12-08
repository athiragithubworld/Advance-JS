// // Function curry using bind method

// let multiply = function(x,y){
//     console.log(x*y);
// }
// // ------------------------
// // let multbytwo = function(y){
// //     let x=2;
// //     console.log(x*y);
// // }
// // Both code are same

// let multbytwo = multiply.bind(this,2,3);// 2 is assigned to x and 3 is assigned to y
// multbytwo(5);//this will get ignore if x and y have value
// // ----------------------------------
// let multbythree = multiply.bind(this,3);// 3 is assigned to x
// multbythree(5);
// // Output: 6 ,15
// // -----------------------------------------------------------------------
// console.log();
 // Using Function clouser


let multiply1 = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multbytwo1 = multiply1(3);// 3 is assigned to x
multbytwo1(5);

let multbythree1 = multiply1(3);// 3 is assigned to x
multbythree1(10);
