// function returnFalse() {
//   console.log('False 함수');
//   return undefined;
// }

// function returnTrue() {
//   console.log('True 함수');
//   return 11;
// }

// console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || 'person 값이 없음');
}

printName();
printName({ name: '이정환' })