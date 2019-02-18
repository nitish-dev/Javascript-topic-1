/* To understand closure, I must understand scopes. The scope in a program is a set of rules for storing variables in some location. */

//There are 3 types of scopes in javascript: Global, Local and block

//This is global scope
var name = "Nitish Singh";
console.log(name); //Nitih singh

//This is local scope
function localScope(){
    //local scope
    var a = 5;
    console.log(a); // 5
}

localScope(); //Nitish Singh
console.log(a); // Uncaught ReferenceError: a is not defined

// Block scope

/* With 'var' a variable is either globally scoped or locally scoped to the function in which it is defined. Block scopes like if, for, while, {} etc. Have no effect on 'var' */

let name = "Nitish Singh";

{
    let name = "Nitish kumar";
    console.log(name); // Nitish kumar
}

console.log(name); //Nitish Singh

//Remember do not redeclare the same variable with the same block scope.It will give an error.

{
    let company = "Hogarth India";
    let company = "TCS";
    console.log(company); // Uncaught SyntaxError: Identifier 'company' has already been declared
}

//Back to the closure

/* Closures is the combination of a function and the lexical environment within which that function was declared.  */

//closure exmple

//exmple 1
function showName(firstName, lastName){
    
    //only show last name
    function showLastName(){
        console.log(lastName);
    }
    return showLastName();
}

showName("Nitish", "Singh"); // Singh

//exmple 2

function employe(){
    const name = "Nitish";
    const designation = "Lead Frontent Developer";
    const sallary = 50000;

    function getCTC(){
        console.log(sallary * 12);
    }

    function getName(){
        console.log(name);
    }
    return{
        getCTC,
        getName
    }
     
}
const emp = employe();
emp.getCTC(); //600000
emp.getName(); //Nitish

// So basically a closure gives you access to an outer function’s scope from an inner function.
//closures are commonly used to give objects data privacy.