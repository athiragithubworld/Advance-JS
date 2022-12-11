// // Fat Arrow Function
// "use strict";
// // var getA = function(a)//argument of function
// // {
// //     return a;//body of function
// // };
// // convert into fat arrow
// let getA = a =>a;//argument of function in left  & body of function in right
// console.log(getA(1));
// ---------------------------------------------------------
// // square of number

// // another way
// let square = (a) => {return a*a}; // let square = a =>a*a;
// console.log(square(2));
// --------------------------------------------------------
// // pass argument outside
// var a = 4;
// let square1 = () => {return a*a}; // let square = a =>a*a; or square1 = _ => {return a*a};
// console.log(square1());
// -----------------------------------------------------
// // Multiple 

// let mult = (a,b) => {return a*b}; // let square = a =>a*a; or square1 = _ => {return a*a};
// console.log(mult(2,4));
// ---------------------------------------------------
// // Increment the value by using setouttime
// var x = function(){
//     this.val=1;
//     //setTimeout (function(){ --> this command will not work for this keyword so we use arro function
//      setTimeout(() =>{ 
//            this.val++;
//         console.log(this.val)
//     },1)
//     };
//     var xx = new x();
// -----------------------------------------
// // Pass n number of arguments without really passing any arguments inside
// var x= function(){
//     console.log(arguments[0])
// };
// x(1,2,3);

// // convert this into arrow function
// var x= (...n) => {
//     console.log(n[0])
// };
// x(1,2,3);
// --------------------------------------Task 12-----
class Student{
    // static count=0;  //static variable to call
    constructor(name,age,Marks){
        this.name = `${name}`
        this.age = `${age}`
        // this.PhNo = `${PhNo}`
        this.Marks = `${Marks}`
    }
    
    //4.Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
    
    studentElgibleforPlacement(PlacementAge){
        // console.log(this);
        return (minMarks) => {
            // console.log('inside eligible for current compnay',this);
        if (this.Marks > minMarks && this.age >PlacementAge ){
            console.log(`${this.name} is ready for Placements`);
            
        }
        else{
            console.log(`${this.name} is not is ready for Placements`);
        }
    }
    }
    }
    const std = new Student("athi",21,52);
    const std1 = new Student("athi77",11,50);
    const std2 = new Student("abc",21,50);
    std.studentElgibleforPlacement(18)(40);
    std1.studentElgibleforPlacement(18)(40);
    std2.studentElgibleforPlacement(18)(40);
    
    

