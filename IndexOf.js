// IndexOf() satrdan belgilangan qiymatning birinchi paydo bo'lish holatini qaytaradi. 
// Qaysi indeksdan boshlab qidirishni belgilash mumkin.

let str = "Dasturlash insonni fikrlashga o'rgatadi";

let output = str.indexOf("a");

console.log(output);
// Natija => 1
// Sabab :  a harfi satrda 6 ta . Ammo birinchi paydo bo'lishi 1 indeksda uchramoqda.

let output2 = str.indexOf("a",2);

console.log(output2);
// Natija => 7
// Sabab : Bu yerda 2 indeksdan boshlab qidirilmoqda. Bunda birinchi paydo bo'lish holati 7 indeksda