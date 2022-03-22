console.log('1' == 1); // true ... 느슨한 검사 => 형 변환
console.log(1 == true); // true

console.log(11 + '문자와 결합'); // '11 문자와 결합' => 문자열로 바뀜, 암묵적 변환
console.log(String(11 + '문자와 결합')); // '11 문자와 결합' => 명시적 변환

console.log(!!'문자열'); // true => 암묵적 변환
console.log(Boolean('문자열')); // true => 명시적 변환

console.log(!!''); // false => 암묵적 변환
console.log(Boolean('')); // false => 명시적 변환
console.log(Number('11')); // 명시적 변환

console.log(parseInt('9.9999', 10)); // 9

// 사용자가 형 변환 => 명시적인 변환(타입)
// JS가 형 변환 => 암묵적인 변환(타입)