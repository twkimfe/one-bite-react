// 객체
// 1. 원시 타입이 아닌 객체 타입의 자료형
// 2. 여러가지 값을 동시에 저장할 수 있는 자료형을 의미

// 1. 객체 생성
let obj1 = new Object();
// 객체 생성자
let obj2 = {};
// 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: '이정환',
  age: '27',
  hobby: '테니스',
  job: 'FE Developer',
  extra: {},
  10: 20,
  'like cat': true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person['age'];

let property = 'hobby';
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 법
person.job = 'fe developer';
person['favouriteFood'] = '떡볶이';

// 3.3 프로퍼티를 수정하는 법
person.job = 'educator';

// 3.4 프로퍼티를 삭제하는 법
delete person.job

// 3.5 프로퍼티의 존재 유무를 확인하는 법 (in 연산자)
let result1 = 'name' in person;
let result2 = 'dog' in person;
console.log(result2);