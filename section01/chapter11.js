// 함수 선언
function getArea(width, height) {
  function another() {    // 중첩 함수
    console.log('another');
  }

  another();
  let area = width * height;

  return area;
}

let area1 = getArea(10, 50);
console.log(area1);

getArea(30, 50);

// 호이스팅
// -> 끌어올리다 라는 뜻