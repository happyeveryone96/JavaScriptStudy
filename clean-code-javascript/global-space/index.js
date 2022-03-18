// 전역 공간 (최상위)

// 1. 경험
// 2. 누군가 혹은 자바스크립트 생태계
// 3. 강의 혹은 책
// 4. 회사 혹은 멘토
// 5. Lint

// window(브라우저) / global(NodeJs)

// 전역 공간을 더럽히면 안된다.
// 전역 변수를 만들지 않는다. (어디서나 접근 가능)
// 지역 변수만 만든다.
// window.global을 조작하지 않는다.
// const,let를 사용하자
// IIFE, Module, Closure, 스코프를 나누기

// 헤더
var globalVar = 'global';

console.log(globalVar);

var setTimeout = 'setTimeout';

function setTimeout() {
  console.log('function');
};


const array = [10, 20, 30];

for (var index = 0; index < array.length; index++) {
  const element = array[index];
}

window.foo = 'bar';