// lastIndexOf() satrda belgilangan qiymatning oxirgi paydo bo'lishini qaytaradi.
// Qaysi indeksdan boshlab qidirishni ham belgilay olamiz.

let str = "Dasturlash insonni fikrlashga o'rgatadi";

let output = str.lastIndexOf("i");

console.log(output);
// Natija => 38
// Sabab : "i" harfining oxirgi paydo bo'lish holati 38 indeksda.

let output2 = str.lastIndexOf("i" , 35);
// Biz bu yerda satrni boshidan qaysi indeksgacha qidirishni belgilamoqdamiz.

console.log(output2);
// Natija => 20
// Sabab : "i" harfi satr boshidan 35-indeksdagi bo'lgan oraliqda "i" harfi 20 indeksda turipti
