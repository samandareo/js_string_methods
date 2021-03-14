// substr() methodi satrdan berilgan indeksdan boshlab satr oxirigacha bo'lgan qiymatni ajratib oladi va qaytaradi.
// Biz berilgan indeksdan satrni xoxlagan qismigacha ko'chirib olishimiz mumkin.

let str = "Dasturlash insonni fikrlashga o'rgatadi";

let output = str.substr(11);
// Qayerdan boshlab ko'chirib olishni belgilamoqda

console.log(output);
// Natija => insonni fikrlashga o'rgatadi

let output2 = str.substr(11 , 7);

console.log(output2);
// Natija => insonni