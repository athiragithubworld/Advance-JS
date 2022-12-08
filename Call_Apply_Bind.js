// // 1.Write a function and use 'call' to call the function    

//         var obj= {num:3};

//         var FunctN = function(a,b){

//            return this.num+a+b;

//          };

//          console.log(FunctN .call(obj,1,2));

// // output :- 6

// // ---------------------------------------------------

// // 2. Write a program using apply

// // ans) 

// // PG1:      

//         var obj= {num:3};

// 		var FunctN = function(a,b,c){

// 		return this.num+a+b+c;

// 		};

// 		var arr=[1,2,3];

// 		console.log(FunctN .apply(obj,arr));

// // Output:- 9
// // ---------------------------------
// // PG2:

//        const person = {

//    		firstName: 'Athi',

//     	lastName: 'xyz'

//          }

//         function greet(greeting, message) {

//         //return `${greeting} ${this.firstName}. ${message}`;

//         return greeting + " " + this.firstName +", " + message;

//        }

//        let result = greet.apply(person, ['Hello !', 'How are you?']);

//        console.log(result);

// // Output:- Hello ! Athi, How are you?

// // ------------------------------------------

// // 3.Write a program using bind

// // ans:

//         var obj= {num:3};

//         var FunctN = function(a,b,c){

//         return this.num+a+b+c;

//          };

//          var bound = FunctN .bind(obj);

//          console.log(bound(1,1,1));

// // Output:- 6

// // -----------------------------------------------------------

// 4.Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.

// ans:

	 var student ={

     name:"Athi",

      age:32

      };

       var Stfunct = function(){

      console.log(this.age);

      };

     var st = Stfunct.bind(student);

     st();
     // console.log();

// Output: 32

// -----------------------------------------------------------



