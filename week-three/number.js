/*let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function checkDivisor(number){
for (i in numbers)//indeex found in the array for each number
    if (numbers %  2 == 0 && numbers % 3 == 0){
        console.log(numbers,'buzzfizz');
    }else if(numbers % 2 == 0){
        console.log(numbers,'buzz');
    }else if(numbers % 3 == 0){
        console.log(number,'buzz');
    }
}

    
 
/*
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let names = ['mamita','glory','joyce','Coach Alex']*/
// loop through the number array and for if a number is divisible by 2, console.log(number, 'fizz'), if it is divisible by 3, console.log(number, 'buzz'), if it is divisible by both 2 and 3, console.log(number, 'fizzbuzz');

  // for (i = 0; i < numbers.length; i++) {
    // if (numbers[i] % 2 == 0 && numbers[i] % 3 == 0) {
    //   console.log(numbers[i], "fizzbuzz");
    // } else if (numbers[i] % 3 == 0) {
    //   console.log(numbers[i], "buzz");
    // } else if (numbers[i] % 2 == 0) {
    //   console.log(numbers[i], "fizz");
    // }
  // }

  /*for(i in numbers) {
    if (numbers[i] % 2 == 0 && numbers[i] % 3 == 0) {
      console.log(numbers[i], "fizzbuzz");
    } else if (numbers[i] % 3 == 0) {
      console.log(numbers[i], "buzz");
    } else if (numbers[i] % 2 == 0) {
      console.log(numbers[i], "fizz");
    }
  }
  console.log('###### For-of method###########')
  for(i of numbers) {
    if (i % 2 == 0 && i % 3 == 0) {
      console.log(i, "fizzbuzz");
    } else if (i % 3 == 0) {
      console.log(i, "buzz");
    } else if (i % 2 == 0) {
      console.log(i, "fizz");
    }
  }
}
checkDivisor();*/

console.log('check if a given number in the array is mtn,orange or camtel')

let phoneNumber = ['652076786','696349845','659748365']
const orangeInitials = ['655','656','657','658','659','696'];
const mtnInitials = ['650','651','652','653','654','667','668'];
const camtelInitials = ['62']

 /function checkNumber(){
  const InitialNumber = phoneNumber.slice(0,3);

  if(mtnInitials.includes(parseInt(InitialNumber))){
    return 'MTN number';
  }
  else if (orangeInitials.includes(parseInt(InitialNumber))){
    return 'Orange number';
  }
  else if (camtelInitials.includes(parseInt(InitialNumber))){
    return 'Camtel number';
  }else {
    return "invalid Number";
  }
 }
 console.log(checkNumber('652076786'));

