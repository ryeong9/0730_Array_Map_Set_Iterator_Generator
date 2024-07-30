// forEach  => 각 요소를 돌면서 함수 호출, 새로운 배열 반환 안 함
let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 500, 450];
let sum = 0;
carSales.forEach((sale) => {
  sum += sale;
});
let average = sum / carSales.length;
console.log(average);

// 배열의 요소마다 50씩 더하기
carSales.forEach((sale, index, array) => {
  // sale은 요소의 값일 뿐이지, 그 array와 관련은 없어짐
  array[index] = sale + 50; // array[index] = array[index] + 50; 도 가능
});
console.log(carSales);
