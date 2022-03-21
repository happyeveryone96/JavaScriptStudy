// typeof -> 문자열로 반환해준다.
function myFunction(){}
class MyClass {}

const str = new String('문자열');
console.log(typeof '문자열'); // 'string'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof 123); // 'number'
console.log(typeof Symbol()); // 'symbol'
console.log(typeof myFunction); // 'function'
console.log(typeof MyClass); // 'function'
console.log(typeof str); // 'object'
console.log(typeof null); // 'object' -> 언어적 오류

// PRIMITIVE vs REFERENCE(Array, function, Date...)
// REFERENCE는 typeof로 판별 불가
// 동적으로 변하는 언어 => 타입 동적


// instanceof -> 객체의 프로토타입 체인을 검사
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = {
  name: 'poco',
  age: 99
}

const poco = new Person('poco', 99)

console.log(poco instanceof Person); // true
console.log(p instanceof Person); // false

const arr = [];
const func = function() {}
const date = new Date();

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(func instanceof Function); // true
console.log(func instanceof Object); // true
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true

console.log(Object.prototype.toString.call(arr)); // [object String]
console.log(Object.prototype.toString.call(func)); // [object Function]
console.log(Object.prototype.toString.call(date)); // [object Date]