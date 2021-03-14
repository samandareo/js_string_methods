// split() methodi satrdagi berilgan qiymatni ","  bilan almashtiradi , yani substrings qatoriga bo'ladi va natija massivda chiqariladi.
// Biz satrning qayerigacha substring qatoriga bo'lishni belgilay olamiz
let str = "Dasturlash insonni fikrlashga o'rgatadi";

let output = str.split(" ");
// Qiymat misolida bo'sh joy kiritilmoqda

console.log(output);
// Natija => [ 'Dasturlash', 'insonni', 'fikrlashga', "o'rgatadi" ];

let output2 = str.split("a");

console.log(output2);
// Natija => [ 'D', 'sturl', 'sh insonni fikrl', 'shg', " o'rg", 't', 'di' ];


let output3 = str.split(" ", 2);

console.log(output3);
// Natija => [ 'Dasturlash', 'insonni' ];