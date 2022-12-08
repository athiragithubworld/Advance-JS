// var a = 2;
// var c = 2;
// function b(){
// var x = 2;
// var c = 4
// console.log(c)//4
// }
// console.log(a);//2
// console.log(this.a);//2
// console.log(this.c)//2
// console.log(this.x)//undefined
// console.log(window.a)//2
// console.log(window.x)//undefined
// console.log(b());//undefined
// ------------------------------------------
// function abc() {
// console.log(a);
// }
// var a = 7;
// abc();
// ------------------------------
// function abc() {
// console.log(a);
// }
// abc();
// var a = 7;
// ----------------------------
// function outerfunction() {
// console.log(a);
//     var c = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(b);
//     console.log(c);
//     }
//     }
//     var a = 7;
//     var b =3
//     outerfunction();
// ----------------------------
// function outerfunction() {
// console.log(a);
//     var a = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(a);
//     console.log(window.a);
//     console.log(this.a)
//     }
//     }
//     var a = 7;
//     var b =3
//     outerfunction();
// ---------------------------
// console.log(a)
// console.log(b);
// let a =5;
// var b =6;
// console.log(b);
// -------------------------------
// console.log(a);
// var a = 5;
// console.log(b) //we havent initialized b, Guess the output
// -------------------------
// let a = 5;
// var b = 6;
// console.log(this.b);
// console.log(window.b)
// console.log(window.a)
// console.log(this.a);
// ---------------------
// let a =5;
// let a = 6;
// ------------------------------------------
// let a =6;
// const b
// --------------------
// var obj ={
//     "key1":"value1",
//     "a":"100",
//     "b":"50",
//     "c":"150"
// }
// var arr = ["value1","100","50","150"]
// // var arrofkeys = object.keys(obj);
// Object.keys(obj).forEach(key => {
//     console.log(obj[key])
// })
// --------------------------- task -6 ------------
// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// console.log('d');
// --------------------------
// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('c'), 0);
// console.log('d');
// -----------------------Task 7-----------
// var a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)
// ----------------------------
// const a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)
// ----------------------------
// let a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)
// ----------------------------
// var a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// fun();
// console.log(a)
// -----------------------------------
// let a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// fun();
// console.log(a)
// -----------------------
// const a = 10;
// {
// var a = 10;
// }
// console.log(a)
// ------------------------
// const a = 10;
// {
// const a = 20;
// {
// const a = 50;
// console.log(a);
// }
// console.log(a)
// }
// console.log(a)
// ----------------------
// const a = 10;
// {
// const a = 20;
// {
// console.log(a);
// }
// console.log(a)
// }
// console.log(a)
// ----------------------Task 8----------------
// function x(){
// let a = 10;
//     function y(){
//     console.log(a);
//     }
//     y()
//     }
//     x();
// --------------------------------
// function x(){
// let a = 10;
//         function y(){
//     console.log(a);
//     }
//     return y();
//     }
//     x();
// ------------------
// function x(){
// let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     console.log( x());
// -----------------------------
// function x(){
// let a = 10;
//     function y(){
// console.log(a);
//     }
//     return y;
//     }
//     const z = x()
//     console.log(z());
// ------------------------------
// function x(){
// let a = 10;
//     function y(){
//     console.log(a);
//     }
//     a= 50;
//     return y;
//     }
//     const z = x()
//     console.log(z());
// ----------Task 9 ---------
// var obj= {num:3};
// var FunctN = function(a,b){
// return this.num+a+b;
// };
// console.log(FunctN .call(obj,1,2));
// -----------------------
// var obj= {num:3};
// var FunctN = function(a,b,c){
// return this.num+a+b+c;
// };
// var arr=[1,2,3];
// console.log(FunctN .apply(obj,arr));
// -----------
// const person = {
//     firstName: 'Athi',
//     lastName: 'xyz'
// }
// function greet(greeting, message) {
//     //return `${greeting} ${this.firstName}. ${message}`;
// return greeting + " " + this.firstName +", " + message;
// }
// let result = greet.apply(person, ['Hello !', 'How are you?']);
// console.log(result);
// ----------------------------
// var obj= {num:3};
// var FunctN = function(a,b,c){
// return this.num+a+b+c;
// };
// var bound = FunctN .bind(obj);
// console.log(bound(1,1,1));
// -------------------
var student ={
    name:"Athi",
    age:32
    };
    var Stfunct = function(){
        console.log(this.age);
    };
    var st = Stfunct.bind(student);
    st();
    
    
    
    
    
    
    
    
    
    
    