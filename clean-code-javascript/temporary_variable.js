// 임시 변수 제거!

// 임시 변수 문제점
// 명령형으로 가득한 로직
// 디버깅 힘들다
// 추가적인 코드를 작성해야 하는 경우 
// -> 임시 변수에 접근해서 수정하게 됨(좋지 않다)

// 해결책 
// 함수 나누기
// 바로 반환
// 고차함수 (map, filter, reduce)
// 선언형


// 좋지 않은 예시
function getElements() {
  const result = {}; // 임시 객체

  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');

  return result;
}

// 깔끔하게
function getElements() {
  const result = {
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value'),
  }; 
  return result;
}

// 더 깔끔하게
function getElements() {
  return {
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value'),
  };
}


// 좋지 않은 예시
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;

  return {
    month, day, hour
  };
}

// 더 깔끔하게
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.Hours();

  return {
    month: month >= 10 ? month : '0' + month,
    day: day >= 10 ? day : '0' + day,
    hour: hour >= 10 ? hour : '0' + hour,
  };
}

// 수정하는 경우
function getDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: computedKrDate(currentDateTime.month),
    day: currentDateTime.day + '분 전',
    hour: currentDateTime.hour + '분 전'
  }
}


// 좋지 않은 예시 (.연산자를 사용해 수정하면 위험할 수 있음)
// 단 하나의 역할만 할 수 있는 함수로 만드는 것이 좋다.
function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  return randomNumber;
}


// 혼란스러운 코드 (명령형에 가깝다)
function getSomeValue(params) {
  let tempVal = 1;
  
  for (let index = 0; index < array.length; index++) {
    temp = array[index];
    temp += array[index];
    temp += array[index];
    temp += array[index];
  }

  if (temp === 1) {
    tempVal = 2;
  } else if (temp === 3) {
    temp += 5
  }
  return temp
}