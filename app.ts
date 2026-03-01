// This is typescript langauge 

let a :number = 10 ; // Converted in var a = 10 ; 
let b :number = 20 ; // converted in var a = 20 ; 
 console.log(a);
 console.log(b);       
 
 // As I didn't tell it which js version to compile it to, by default it will compile to es3 
//  Hence use tsc app.ts --target es2016
// after configuring tsconfig.json just use tsc 
// now they got compiled to es6
// as strict mode and let var a = 10;

// a = "Raju" 
// error but it will still compile to js 


// string 
let str:string = "Raju bhai";

// Boolean 

let isActiveNow :boolean = true;
isActiveNow = false;


// bigInt
let bigNumber:bigint = 23432n;

// error as bigint literals are not available then targeting lower than es2020 
//  but convert still kardega is mai 

// null 
let abc:null = null;
let bcd : undefined = undefined;

// bcd = "Mohan ";

let names : string = "Raju kumar";

let userAge : number = 22;

const mylife : number = 12;

// home  work kya 
// compile time langauge kya hota 
// Interpreted language kya hota 
// jit : just in time 

let x = 20 ; 
// x = "Raju" ;
// error even if we dont specify type it will take type as  a number and give error on assignment string 