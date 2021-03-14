// includes() methodi satr ichidan qiymat qidiradi. Agar qiymat mavjud bo'lsa true , aks xolda false qaytaradi
// Qiymatni qaysi joydan qidirishni ham belgilay olamiz.

let str = "Dasturlash insonni fikrlashga o'rgatadi";

let output = str.includes("insonni");

console.log(output);
// Natija => true

let output2 = str.includes("insonni" , 3);

console.log(output2);
// Natija => true
// Sabab : 3 indeksdan satrni oxirigacha bo'lgan qismda qiymat mavjud. Agar berilgan oraliqda qiymat bo'lmasa natija false bo'lar edi.