// is Not A Number => 숫자가 아니다
// isNaN
console.log(isNaN(123)); // false <= 숫자가 숫자가 아니다 => 숫자가 맞다
console.log(isNaN(123 + '테스트')); // true 느슨한 검사

// ES2015+
console.log(Number.isNaN(123 + '테스트')); // false 엄격한 검사