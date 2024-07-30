// Set => 중복된 값 허용❌, 요소 순서에 의미❌, 인덱스로 요소 접근❌
//     => for...of와 forEach()메서드를 사용하여 포함된 값 순회 가능

// 생성자 함수로 생성
const set = new Set();
console.log(set);

// 중복된 값 ❌
const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // {1,2,3}만 출력

const uniq = (array) => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 5, 4])); // [2,1,3,4,5]

// 요소의 개수 확인
const { size } = new Set([1, 2, 3, 3]);
console.log(size);

// 요소 추가 메서드 => 연속 호출도 가능
const set2 = new Set();
set2.add(1).add(2);
console.log(set2);

// 요소가 존재하는지 확인 => 불리언으로 출력
const set3 = new Set([1, 2, 3]);
console.log(set3.has(2));

// 요소 삭제 메서드 => 연속 호출❌
set3.delete(2);
console.log(set3);

// 일괄 삭제 메서드
set3.clear();
console.log(set3);

// for...of와 forEach()
let odds = new Set([1, 3, 5, 7, 9]);
let sum = 0;

for (let o of odds) sum += o;
console.log(sum); // 25

let product = 1;
odds.forEach((o) => (product *= o));
console.log(product);

// forEach()
const userIDs = [101, 102, 101, 103, 102];
const uniqUserIDs = new Set(userIDs); // 중복 삭제
uniqUserIDs.forEach((userID) => {
  console.log(`ID: ${userID}`);
});

const tags = ["JavaScript", "HTML", "CSS", "HTML"];
const uniqTags = new Set(tags);
uniqTags.forEach((tag) => {
  console.log(`tag: ${tag}`);
});

// 스프레드 문법과 레스트 문법
const set4 = new Set([1, 2, 3]);
console.log([...set4]);
const [a, ...rest] = set4; //rest는 첫번째 인덱스 제외 나머지가 대입됨
console.log(a, rest); // 1 [2, 3]

let set5 = new Set([1, 2, 3]);
let set6 = new Set([4, 2, 3]);
// 합집합
let union = new Set([...set5, ...set6]);
console.log(union);
// 교집합
let intersection = new Set([...set5].filter((x) => set6.has(x)));
console.log(intersection);
// 차집합
let difference = new Set([...set5].filter((x) => !set6.has(x)));
console.log(difference);
