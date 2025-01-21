//old school function definition
//can return anything; always runs to completion after invocation
function usualWay(num1, num2){
    return num1 + num2;
}

//Constructor
const multiply = new Function("x", "y", "return x * y");

//Expression
//the function assigned to a variable
const variable1 = function expressionFunction (num1, num2) {
    return num1 + num2;
}

//Expression
//the function is anonymous but assigned to a variable
const variable2 = function (num1, num2) {
    return num1 + num2;
}

//Arrow function
const arrowVariable1 = (num1, num2) => {
    return num1 + num2;
}

//Arrow function with single line code
const arrowVariable2 = (num1, num2) => num1 + num2;

//Method function
const obj = {
    multiply(x, y) {
      return x * y;
    },
  };

//Anonymous functin
//can return anything; always runs to completion after invocation

//Generator function
//returns a Generator object; can be paused and resumed with the yield operator
const foo = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
  };
  
  let str = '';
  for (const val of foo()) {
    str = str + val;
  }
  
  console.log(str);
  // Expected output: "abc"

  function* generator() {
    let index = 0;

    while (true) {
        yield index++;
    }
  }
  
  const gen = generator(); // "Generator { }"
  
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3

//Async function
//returns a Promise; can be paused and resumed with the await operator

//Async generator function
//returns an AsyncGenerator object; both the await and yield operators can be used

/*

arrow functions and methods cannot be constructed. 
Async functions, generator functions, and async generator functions are not constructible regardless of syntax.
The function declaration creates functions that are hoisted. Other syntaxes do not hoist the function and the function value is only visible after the definition.
The arrow function and Function() constructor always create anonymous functions, which means they can't easily call themselves recursively. One way to call an arrow function recursively is by assigning it to a variable.
The arrow function syntax does not have access to arguments or this.
The Function() constructor cannot access any local variables — it only has access to the global scope.
The Function() constructor causes runtime compilation and is often slower than other syntaxes.

*/