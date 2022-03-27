// truthy
if ('string'.length > 0) {
}
// >>
if ('string'.length) {
}

if (!isNaN(10)) {
}
// >>
if (10) {
}

if (boolean === true) {
}
// >>
if (boolean) {
}


// 참 같은 값 ... 불리언을 기대하는 문맥에서 true로 평가되는 값
// true
// {}
// []
// 42
// "0"
// "false"
// new Date()
// -42
// 12n
// 3.14
// -3.14
// Infinity
// -Infinity


// 거짓 같은 값 ... 불리언 문맥에서 false로 평가되는 값
// false
// null
// undefined
// 0
// -0
// 0n
// NaN
// ""


//
function printName(name) {
  if (!name) {
    return '사람이 없네요';
  }
  return '안녕하세요' + '님';
}

console.log(printName()); // 사람이 없네요