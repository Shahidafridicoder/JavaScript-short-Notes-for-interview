// console.log("hey");

// alert("shahid");


//             ---------------prompt, alert, warm, error, var, const----------------
            // prompt() and alert() are two functions provided by the browser.
           // prompt()- 1.it takes a string as parameter to ask anything from users.
                      //2. this string is displayed in the dialogue window and will take some input from users.
           //alert()-  1. it also takes string as a parameter but not asks anything from user.
                     //2. taken parameter displays on small window for user as a alert.

//Examples:-

// var age;
// age = prompt("how are u?", "typehere");
// console.log("<br>GoodMorning" + age + "</br>");


// var a;
// a = prompt("how?", "typehere");
// console.error("<br>GoodMorning" + a + "</br>");
// console.warn("<br>GoodMorning" + a + "</br>");


// const love = console.log("shahid" + " weds " + "Zainab");
// love = console.log("shahid " + " weds " + "Anamika");


                //------------------differences between var, let and const---------------------

//let and var don’t have to be initialized when declared.
//const has to be initialized when declared.
//var can be redefined and redeclared,
//let can be redefined but not redeclared,
//const can’t be redefined or redeclared.
//var declarations are globally or function scoped while let and const are block scoped.


//               ----------------if else------------------
 
// var a = 12;
// var b = a;

// console.log(a);


// var c = [1, 2, 3, 4, 5];
// var d = c;
// console.log(d);

// if (0)
//     console.log("bosdiwala");
// else
//     console.log("chutiya");

//     if (1)
//     console.log("bosdiwala");
// else
//     console.log("chutiya");

//     if (-1)
//     console.log("bosdiwala");
// else
//     console.log("chutiya");

//     if (NaN)
//     console.log("bosdiwala");
// else
//     console.log("chutiya");

//     if (null)
//     console.log("bosdiwala");
// else
//     console.log("chutiya");

//     if (undefined)
//     console.log("bosdiwala");
// else
//     console.log("chutiya");

//     if (Symbol)
//     console.log("bosdiwala");
// else
//     console.log("chutiya");


//take two numbers from user as a unput and print the greater number between them?

// var a = prompt("Enter a first number");   //with this method if we take any numbers to compare then it will compare
// var b = prompt("Enter second number");    //for comparing numbers see the next examples.
// if (a > b)
//     console.log("a");
// else
//     console.log("b");

// var a = Number(prompt("Enter first number"));   //this is the true method to compare the numbers.it will take
// var b = Number(prompt("Enter second number"));  // alphabate or special characters as a ASCII code.
// if (a > b)
//     console.log("a");
// else
//     console.log("b");



// //take three numbers from user as a input and print if first number is greater than second then print third and if number second is greater third then print first otherwise print second.
  
// var a = Number(prompt("Enter first number"));
// var b = Number(prompt("Enter second number"));
// var c = Number(prompt("Enter third number"));

// if (a > b)
//     console.log("c");
// if (b > c)
//     console.log(a);
// else
//     console.log(b);

//Que- print 0 2 8 10 14

// for (var i = 0; i < 15; i += 2)
// {
//     if (i === 4 || i === 6 || i === 12) { }
//     else
//         console.log(i)
// }
    
//Que- print the number 1 5 2 10 3 15 4 20.
// for (var i = 1; i < 5; i++){
//     console.log(i);
//     console.log(i * 5);
// }
                 

//          ------------------loops---------------------------

//Que- print the series 1 10 2 20 4 40 8 80
// for (var i = 1; i < 9; i *= 2)
// {
//     console.log(i+" "+(i*10));
    
//     }
      


//DATE- 8/11/2022 practice

// Print the fibonacii numbers.

// var prev = 0;
// var curr = 1;
// console.log(0);
// console.log(1);

// for (var i = 1; i < 10; i++){
//     var next = prev + curr;
//     console.log(next);
//     prev = curr;
//     curr = next;
// }



//              -----------------Array []-----------------------

        //pop, push, shift, unshift, for each, splice.

 //var a = ["shahid", "shoaib", "babu", "pravez", "khushi"];

// console.log(a[0]);   // with the help of this we can print the specified array.
// console.log(a[2]);   ///////////////////////////////////////////////////////

// a.pop();     //with the help of "pop" we can remove the end element of the array.but not specified element with this method
// a.pop();
// a.push("khushi");
// a.push("babu");
// a.push("pravez");  //with the help of this method we can add any particular element at the end of array.

// a.shift();
// a.shift();
// a.shift(); // with the help of of this method we can remove element from the beginning of array.

// a.unshift("india");
// a.unshift("engineer");// with the help of this method we can add the element in the beginning of array.

//a.splice(3, 1);  //here 3 is the position of array that is 3rd position.
                 // 1 means one element will be deleted just next to the 3rd position.
                 // if we write 2 in place of 1 that means two elements will be deleted just next to the 3rd position.

//a.length;    //with the help of this property we can find the length of an Array.

//examples:-

//console.log(a.splice(3, 1));
//console.log(a.length);

//for printing above all properties we will write inside the <-----console.log(the task u want to perform)-------->


                 //-------------------String------------------------


//             ------------------charAt()---------------------
           // To get a character from a string at a specified index, use the charAt(index) method:
//Example:-
//var a = 'shahid';
//console.log(a.charAt(0));
//console.log(a.charAt(5));
//console.log('shahid'.charAt(0)); //if we direct use the value then will have to write inside quote.

// function shortcut(Shahid,Afridi){  //applied in function
//     console.log('Shahid'.charAt(0)+'Afridi'.charAt(0));
// }
// shortcut();

//               -----------------trim()--------------------
              //The trim method removes whitespaces from both ends of a string.

//Examples:-
// var a = '       Shahid      ';
// console.log(a); //this code will give the output both side with space...but
// console.log(a.trim()); //this trim() method will remove the space from both sides of string.
 

//        ------------toUpperCase()/toLowerCase() method-------------------
              // used for converting the any string in upper/Lower case.

//Examples:-
// var a = 'shahid';
// console.log(a.toUpperCase());

// var a = 'SHAHID';
// console.log(a.toLowerCase());


//          --------------------foreach loop----------------------


//this is the loop which automatically iterates through
//all the elements of an array, it helps in the working with the dynamic array.
// var items = [1, 2, 3, 4, 5, 6];
// var copy = [];                   //for using "for each" we need to create an empty array.
// items.forEach(function (item) {   //if var is items still we'll take item in function(item) because we're talking about each
//     //copy.push(item);             //we can perform multiple task like-
//     //copy.push(item * 2);     //each element of array will become twice.
//     copy.push(item + item * 2); //we can perform many more like this.
// })

// Que. print the elements of array with the help of for each loop.
    
// var arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(function (arr) {
//     console.log(arr);
// })

     //map, filter--------------------------------------
// var arr = [1, 2, 3, 4, 5, 6, 7];
// arr.map(function (elem) {      //when you want to perform an action on each element in a collection, and gather the results into a new array. in js, "for loop" or "nesting" can complete the same task but "map()" is preferable.
//     console.log(elem);
// })

filter() use the   



//          ---------------------FUNCTIONS-----------------------

        // According to ES5(EcmaScript5) there are three types of functions.
        // 1. Function Statement.
        // 2. Function Expression
        // 3. Function Anonymous
        
        // According to ES6(EcmaScript6) there are three types of function.
        // 1. Fat Arrow Function
        // 2. Fat Arrow with one parameter
        // 3. implicit and explicit function

 
 //                        1. Function statement
// var a = 10;
// var b = 20;
// function add(val) {
//     console.log(a+b);
// }
// add();


//Note-  []- this square bracket is a symbol of array.
//       {}- this curly bracket is a symbol of Object.


//            ---------------object {}-----------------


  //Notes- 1. if we write function inside the object is known as method.
  //       2. if we write function outside object is known as it is, i.e. function.

// var a = {
//     b: {
//         c: function () {
//             return{d:"hello"}
//         }
//     }
// }
// console.log(a.b.c().d);

//NOTE- here
//a is object,
//b is object, but for "a" its a property,
//c is method but will always return object,
//d we don't know it's object or not but it's a property for "c".

//point to be remembered- anything which comes before the dot is an object.


                //----------------------Math.random------------------
//               It will give any random decimal values between  0 to 1, when u will run this method.

//Example: - 
//var a = Math.random();

              //-----------------------Math.floor----------------------
//              it will remove the decimal from the decimal number and always consider the number just below.
//                (ex- 1.1...output 1, 3.9...output 3)

//Example:-
//var a = Math.floor(Math.random()); //here Math.random will give any random decimal value and Math.floor will give zero. 
//Example:-
//var b = Math.floor(Math.random() * 10);//here Math.floor will give single digit value.


              //----------------------Math.ceil----------------------
//              it will remove the decimal from the decimal number and always consider the number just above.
//               (ex- 1.1...output 2, 3.9...output 4)

//Example:- 
//var a = Math.ceil(Math.random());
//Example:-
//var b = Math.ceil(Math.random() * 10);