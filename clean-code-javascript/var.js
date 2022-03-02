// 1. 가장 마지막에 할당한 변수가 출력 (재할당)
var name = '이름';
var name = '이름2';
var name = '이름3';
var name = '이름3';

console.log(name); // 이름3

// 2. 호이스팅
console.log(name) // undefined

var name = '이름3';