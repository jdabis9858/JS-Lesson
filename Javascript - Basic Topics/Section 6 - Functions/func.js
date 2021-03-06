//Functions:

//piece of code we want to run over and over
//functions are like containers that hold lines of code
//we pass arguments in them
//and then output a result

//We want to be able to calculate the age of a person by knowing
//the year at which that person is born:


function calculateAge(yearOfBirth){
  var age = 2018 - yearOfBirth;
  return age;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1967);
var ageMarry = calculateAge(1877);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMarry);


//keyword function and name of function, pass in argument = data we want to pass into the functions
//function body
  // define a variable age and make it equal to 2018 - argument passed inspect
  // return the age

//to call the function, we need to write it out and pass in information
// we pass in 1990
// but this value will not be stored anywhere so:

// we create a variable for it, ageJohn and we call the function with any argument we want for that specific person

  //js sees this line 16 and simply stores this function in memory and waits so we use it
  //that means: calculateAge, we call the function, we pass in 1990, which is the argument stored as yearOfBirth
  //this is then used in the function body and stored into the age variable
  //which is finaly returned
  //so: calculateAge(1990)=returns the age which is ultimately assigned to a person
  //this was made to show how we can execute one function for multiple people and NOT REPEAT OUR CODE!!

//the point here is that we can use many examples with same logic from one function
//use it over and over again






//------------------------------------------------------------------

//here's an example of creating a new function with 2 arguments passed in
//insde the body we are using a function from above to calculate the age which is stored

function yearsToRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
      console.log(name + " " + "retires in " + retirement + " years");
    } else {
      console.log(name + " is already retired. ")
    }
}
//when this function gets called:
  // the first argument will get passed in as 1st parameter of func
  // the second arguments gets passed as 2nd parameter of function

//now in the body of the functin:
  //age is a var declared with the above function with 1990 - (second parameter) as the argument.
yearsToRetirement('john', 1990);
yearsToRetirement('mike', 1967);
yearsToRetirement('mary', 1948);

//so above examples basically show that functions dont necessarily need to return anything
//and functions can call other functions.
