// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// var number1 = 5;
// var number2 = 2.8;
// var result = add(number1, number2);
// console.log(result);
// //위에서는 number type의 합을 보여주기때문에 result= 7.8 이 나오지만
// var string = "5";
// var result = add(string, number2);
// console.log(result);
// // string + number type의 합이기 때문에 52.8로 return 하게된다
// const number3 = "6";
// const result2 = add(number1, number3);
// console.log(result2);
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// 숫자에 문자열이 포함되어 더해지기 때문에 다시"Result is: 52.8"이라는 수로 보여진다
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
