//  startsWith() methodi yordamida satrni boshlang'ich qiymatini tekshira olamiz. 
// Satrni qaysi indeksdan boshlab tekshirishni ham belgilay olamiz.
// To'g'ri bo'lsa natija true aks xolda false.

let str = "Dasturlash insonni fikrlashga o'rgatadi";

let output = str.startsWith("Dasturlash");

console.log(output);
// Natija => true

let output2 = str.startsWith("insonni" , 11);

console.log(output2);
// Natija => true