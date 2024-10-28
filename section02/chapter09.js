// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: '이정환', hobby: 'tennis' },
  { name: '김요한', hobby: 'tennis' },
  { name: '홍길동', hobby: 'reading' },
]

const tennisPeople = arr1.filter(
  (item) => (item.hobby === 'tennis')
);

// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고, 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a앞에 위치 -> 오름차순
    return 1;
  } else if (a < b) {
    // a가 b 앞에
    return -1;
  } else {
    // 두 값 위치 불변
    return 0;
    // a, b 자리 그대로 위치
  }
});

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ['c', 'k', 'a'];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ['hi', "i'm", 'teo'];
const joined = arr6.join(' ');
console.log(joined);