// var는 함수 단위 스코프
var global = '전역';

if (global === '전역') {
  var global = '지역';
  console.log(global); // 지역
}

console.log(global); // 지역


// let과 const는 블록 단위 스코프
let global = '전역';

if (global === '전역') {
  let global = '지역';
  console.log(global); // 지역
}

console.log(global); // 전역

//
const global = '전역';
{
  const global = '지역';
  
  console.log(global); // 지역
}

console.log(global); // 전역

// 객체
// 선언 + 할당
const person = {
  name: 'jang',
  age: '30',
}

// 재할당 에러 발생하는 경우
// TypeError: Assignment to constant variable.
person = {
  name: 'jang2',
  age: '30',
}

// 재할당
person.name = 'lee';
person.age = '22';


// 배열
const person = [{
  name: 'jang2',
  age: '30',
}]

person.push({
  name: 'lee',
  age: '22',
})

// const는 재할당만 금지된다.