function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
//위에서는 number type의 합을 보여주기때문에 result= 7.8 이 나오지만
var string = "5";
var result = add(string, number2);
console.log(result);
// string + number type의 합이기 때문에 52.8로 return 하게된다
var number3 = "6";
var result2 = add(number1, number3);
console.log(result2);
