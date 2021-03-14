// match() methodi satrdan berilgan qiymatlarni qidirib, natijani massivda chiqaradi.

let str = "Dasturlash insonni fikrlashga o'rgatadi";

let output = str.match("insonni");

console.log(output);
/* Natija => 
[
  'insonni',
  index: 11,
  input: "Dasturlash insonni fikrlashga o'rgatadi",
  groups: undefined
]
Qiymat indeksi , satr va guruh berilmoqda.
*/