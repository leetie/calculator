// var displayValue = 0;
// var choiceContent;
// var displayText = document.createElement('p');
// displayText.textContent = choiceContent;
// //var choice;
// const buttons = document.querySelectorAll('button');
// //operator functions
// function add(a, b) {
//   return a + b;
// }
// function subtract (a, b) {
//   return a - b;
// }
// function multiply (a, b) {
//   return a * b;
// }
// function divide (a, b) {
//   return a / b;
// }

// function operate (a, operator, b) {
//   return operator == "multiply" ? multiply(a, b) 
//         :operator == "divide" ? divide(a, b) 
//         :operator == "subtract" ? subtract(a, b)
//         :operator == "add" ? add(a, b)
//         :"Error-use +, -, /, or X";
// }

// //populate display function
// const display = document.getElementById('display');

// buttons.forEach((button) => {
//   button.addEventListener('click', 
//   (e) => {
//     choiceContent = button.textContent;
//     appendDisplay(choiceContent);
//   })
// })

// function appendDisplay(choice) {

//   display.appendChild(displayText);
// }


// function getHistory () {
//   return document.getElementById("history-value").innerText;
// }

// function printHistory (num) {
//   document.getElementById("history-value").innerText=num;
// }

// function printOutput (num) {
//   if(num=="") {
//     document.getElementById("output-value").innerText=num;
//   }
//   else{
//     document.getElementById("output-value").innerText=getFormattedNumber(num);
//   }
//   document.getElementById("output-value").innerText=getFormattedNumber(num);
// }


// function getFormattedNumber(num) {
//   var n = Number(num);
//   var value = n.toLocaleString("en");
//   return value;
// }
// function getOutput() {
//   return document.getElementById("output-value").innerText;
// }

// function reverseNumberFormat(num) {
//   return Number(num.replace(/,/g,''));
// }

// var operator = document.getElementsByClassName("operator");
// for(let i = 0; i < operator.length; i++) {
//   operator[i].addEventListener('click', function (){

//     if(this.id == "clear") {
//       printOutput("");
//       printHistory("");
//     }

//     if(this.id == "del") {
//       var output = reverseNumberFormat(getOutput()).toString();
//       if(output){//if output has a value
//         output = output.substr(0, output.length-1);
//         printOutput(output);
//       }
//     }

//     else{
//       var output = getOutput();
//       var history = getHistory();
//       if(output != "") {//if output is not an empty string, do this
//         output = reverseNumberFormat(output);
//         history = history+output;
        
        
//         if(this.id=="="){
//           var result = eval(history);
//           printOutput(result);
//           printHistory("");
//         }

        
        
        
//       }
//     }
//   });
// }



// var number = document.getElementsByClassName("number");
// for(let i = 0; i < number.length; i++) {
//   number[i].addEventListener('click', function (){
//     var output = reverseNumberFormat(getOutput());
//     if(output!=NaN) {//if output is a number
//       output=output+this.id;
//       printOutput(output);
//     }
//   });
// }
var currentOperator;

function getHistory() {
 return document.getElementById("history-value").innerText;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function updateHistory(num) {
  return document.getElementById("history-value").innerText = num;
}

function updateOutput(num) {
  return document.getElementById("output-value").innerText = num;
}


const numbers = document.getElementsByClassName("number");
for(let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    var output = getOutput();
    if(output!= NaN) {
      output = output + this.id;
      updateOutput(output);
    }
  })
}

var currentOperator = "";
const operators = document.getElementsByClassName("operator");
for(let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function () {
    var history = Number(getHistory());
    //history = history.replace(/+/g,"");
    var outputValue = Number(getOutput());
    
    if (this.id != "=") {//if history has a value
      
      output = operate(history, this.id, outputValue);
      updateOutput(output);
    }

    if (this.id == "clear") {updateOutput(""); updateHistory("");}

    else if (this.id == "del") {
      var output = getOutput().toString();
      output = output.substr(0, output.length-1);
      updateOutput(output);
    };

    if (this.id == "+") {
      currentOperator = "+";
      history = getHistory();
      output = getOutput();
      updateHistory(output);
      updateOutput("");
    }

    if (this.id == "-") {
      currentOperator = "-";
      history = getHistory();
      output = getOutput();
      updateHistory(output);
      updateOutput("");
    }

    if (this.id == "*") {
      currentOperator = "*";
      history = Number(getHistory());
      output = Number(getOutput());
      updateHistory(output);
      updateOutput("");
    }

    if (this.id == "=") {
      
      history = Number(getHistory());
      output = Number(getOutput());
      total = operate(history, currentOperator, output);
      updateOutput("");
      updateHistory("");
      updateOutput(total);
    }
    
  });

};

//operator functions
function add(a, b) {
  return a + b;
}
function subtract (a, b) {
  return a - b;
}
function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  return a / b;
}

function operate (a, operator, b) {
  return operator == "*" ? multiply(a, b) 
        :operator == "/" ? divide(a, b) 
        :operator == "-" ? subtract(a, b)
        :operator == "+" ? add(a, b)
        :operator == "=" ? operate(a, currentOperator, b)
        :"Error-use +, -, /, or X";
}

function equals(history, operator, output) {
  return operate(history, operator, output);
}
