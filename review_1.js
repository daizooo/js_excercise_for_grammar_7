const array1 = [1, 2, 3, 4, 5];
console.log(array1);

console.log(array1[3]);

array1[1] = 999;

console.log(array1);

const array2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(array2);

console.log(array2[2]);

console.log(array2[1][0]);

const array3 = ["コメント1", "コメント2", "コメント3"];

array3.push = "コメント4";

console.log(array3);

const array4 = ["タスク1", "タスク2", "タスク3"];
const poppedValue = array4.pop();
console.log(poppedValue);

const array5 = ["タスク1", "タスク2", "タスク3"];
console.log(array5);
array5.unshift("最優先タスク");
console.log(array5);

const array6 = ["タスク1", "タスク2", "タスク3"];
console.log(array6);
const shiftedValue = array6.shift();
console.log(shiftedValue);
console.log(array6);
