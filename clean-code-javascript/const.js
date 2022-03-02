// const
// 1. 재선언 불가능
const name = '이름3';
const name = '이름3';
const name = '이름3';

console.log(name); // SyntaxError: Identifier 'name' has already been declared

// 2. 재할당 불가능
const name = '이름3';
name = '이름2';

console.log(name); // TypeError: Assignment to constant variable.