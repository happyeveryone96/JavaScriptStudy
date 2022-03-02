// let
// 1. 재선언 불가능
let name = '이름3';
let name = '이름3';
let name = '이름3';


console.log(name); // SyntaxError: Identifier 'name' has already been declared
// 2. 재할당 가능
let name = '이름';
console.log(name); // 이름
name = '이름2';
console.log(name); // 이름2