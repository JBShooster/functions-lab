//First problem
var maxOfTwoNumbers = function(numA, numB){
    if(numA > numB){
        console.log(numA + " is greater than " + numB);
    }
    else{
        console.log(numB + " is greater than " + numA);
    }
};

maxOfTwoNumbers(430234, 239404);

//Second Problem
var maxOfThree = function(numA, numB, numC){
    if(numA > numB && numA > numC){
        console.log(numA + " is the biggest");
    }
    else if(numB > numA && numB > numC){
        console.log(numB + " is the biggest");
    }
    else if(numC > numA && numC > numB){
        console.log(numC + " is the biggest");
    }
    else{
        console.log("These numbers are all equal")
    }
};

maxOfThree(7,10,1);

//Problem 3
var isAVowel = function(letter){
    if(letter.toUpperCase() == "A" || letter.toUpperCase() == "E" || letter.toUpperCase() == "I" || letter.toUpperCase() == "O" || letter.toUpperCase() == "U"){
        console.log(letter + " is a vowel");
    }
    else{
        console.log(letter + " is not a vowel");
    }
};
isAVowel("o");
isAVowel("k");

//Problem4 Part A:
numbers = [1,2,3,4,5]
var sumArray = function(numbers){
    for(sum=0, i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
};

//Answer should be 15
sumArray(numbers);  

//Problem4 Part B
var multiplyArray = function(numbers){
    for(product=1, i = 0; i < numbers.length; i++){
        product *= numbers[i];
    }
    console.log(product);
};

//Answer should be 120
multiplyArray(numbers);