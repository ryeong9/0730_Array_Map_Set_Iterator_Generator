// Map => 키 타입에 제한 ❌

// 생성자 함수로 생성, 이터러블을 인수로 받음
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log(map);

// const map1 = new Map([1, 2]);
// console.log(map1); //error - Iterator value 1 is not an entry object
const map1 = new Map([[1, 2]]);
console.log(map1);

// 키 값이 중복되면, 값이 덮어써짐
const map2 = new Map([
  ["key1", "value1"],
  ["key1", "value2"],
]);
console.log(map2); // Map(1) { 'key1' => 'value2' }

// 요소 개수 확인
const { size } = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
console.log(size);

// set() => 요소 추가 메서드 => 연속 호출 가능
const map3 = new Map();
console.log(map3);
map3.set("key1", "value1").set("key2", "value2");
console.log(map3);

const map4 = new Map();
const lee = { name: "LEE" };
const kim = { name: "kim" };
map4.set(lee, "developer").set(kim, "designer");
console.log(map4);

// delete() => 삭제 성공 여부를 불리언으로 반환
console.log(map4.delete(kim));
console.log(map4); // kim 삭제 후, lee만 남음

// has() => 요소가 존재하는지 불리언으로 반환
console.log(map4.has(kim));
console.log(map4); // kim 삭제 후, lee만 남음

// clear() => 요소 일괄 삭제,
// 메서드는 언제나 undefined를 반환
console.log(map4.clear()); // undefined
map4.clear(); // 일괄 삭제
console.log(map4);

let map5 = new Map();
map5.set(0, "zero");
map5.set(1, "one");
map5.forEach((value, key) => console.log(key, value)); // 0 zero 1 one
