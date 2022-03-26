// 삼항연산자
// 3개의 피연산자
// 조건 ? 참 : 거짓

// case 1
function example() {
  if (condition) { return value1; }
  else if (condition2) { return value2; }
  else if (condition3) { return value3; }
  else { return value4 }
}
// 위의 함수와 동일한 로직 -> 삼항연산자를 잘못 사용한 예시 (가독성 떨어짐)
// 이런 경우는 switch문이 더 좋다.
function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4; 
}

// case 2
const example = condition1
  ? (a === 0 ? 'zero' : 'positive')
  : 'negative';

// case 3
const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : '이름없음';

  return `안녕하세요 ${name}`;
}

// case 4 (삼항연산자가 어울리지 않는 경우)
function alertMessage(isAdlut) {
  // isAdlut
  //   ? alert('입장이 가능합니다.')
  //   : alert('입장이 불가능합니다.');
  if (isAdlut) {
    alert('입장이 가능합니다.');
  } else {
    alert('입장이 불가능합니다.')
  }
}

// case 5
function alertMessage(isAdult) {
  return isAdult ? '입장이 가능합니다.' : '입장이 불가능합니다.';
}
