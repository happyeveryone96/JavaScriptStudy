// 호이스팅 - 런타임 시에 선언이 최상단으로 끌어올려지는 현상
// 문제점 - 코드를 작성할 때 예측하지 못한 실행 결과가 노출됨

// ex1
var global = 0;

function outer() {
  console.log(global); // undefined
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global); // 10
  }

  inner();

  global = 1;

  console.log(global); // 1
}


// ex2
function duplicateVar() {
  var a;
  
  console.log(a); // undefined

  var a = 100;

  console.log(a); // 100
}

// ex3 (함수도 호이스팅된다.)
var sum;

console.log(typeof sum); // function

sum = function() {
  return 1 + 2;
}


// 함수 표현식을 사용하자!
const sum = function() {
  return 1 + 2;
}

console.log(sum()); // 3