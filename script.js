// Exercise 1

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
};
  
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise 2

const isAdult = (num1) => {
    if (num1 >= 18) {
      return 'Adult';
    } else {
      return 'Minor';
    }
};

console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3

const isCharAVowel = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return 'true';
    } else {
      return 'false';
    }
};

console.log('Exercise 3 Result:', isCharAVowel("a"));

// Exercise 4

const generateEmail = (name, domain) => {
    return `${name}@${domain}`;
};

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5

const greetUser = (user, time) => {
    return `Good ${time} , ${user}!`;
};

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// Exercise 6

const maxOfThree = (num2, num3, num4) => {
    if (num2 > num3 && num2 > num4) {
      return num2;
    }  
    else if (num3 > num2 && num3> num4) {
        return num3;
    } else {
        return num4;
    }
};

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// Exercise 7

const calculateTip = (bill, percentage) => {
    return bill*(percentage/100);
};

console.log('Exercise 7 Result:', calculateTip(50, 20));

// Exercise 8

const convertTemperature = (temp, scale) => {
    if (scale === 'C') {
        const Fahrenheit = (temp*9/5)+32;
        return `${Fahrenheit} (Fahrenheit)`;
    } 
    else if (scale === 'F'){
        const Celsius = 9/5*(temp-32);
      return `${Celsius} (Celsius)`;
    } else{
        return 'none';
    }
};

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// Exercise 9

const basicCalculator = (num5, num6, operation) => {
    if (operation === 'add') {
        return num5+num6 ;
    } 
    else if (operation === 'subtract'){
        return num5-num6;
    }
    else if (operation === 'multiply'){
        return num5*num6;
    }
    else if (operation === 'divide') {
        return num5/num6;
    } else {
        return 'no operation';
    }
};

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


// Level up Exercise 10

const calculateGrade = (num7) => {
    if (num7 >= 90) {
        return 'A' ;
    } 
    else if (num7 <= 89 && num7 >= 80){
        return 'B';
    }
    else if (num7 <= 79 && num7 >= 70){
        return 'C';
    }
    else if (num7 <= 69 && num7 >= 60) {
        return 'D';
    } 
    else if (num7 < 60) {
        return 'F';
    } else {
        return 'No grade';
    }
};

console.log('Exercise 10 Result:', calculateGrade(85));

