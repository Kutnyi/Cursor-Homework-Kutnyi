const jeep = 15.1678;
const mazda = 123.965;
const kia = 90.2345

const maxPrice = Math.max(jeep, mazda, kia);
const minPrice = Math.min(jeep, mazda, kia);
const sumGoods = (jeep + mazda + kia);

const wholePrice = Math.floor (jeep) + Math.floor (mazda) + Math.floor (kia);
const roundedPrice = Math.round (wholePrice / 100) * 100;

const isEvenNumber = (wholePrice % 2 === 0);

const remainder = 500 - sumGoods;
const averageValue = +(sumGoods / 3) .toFixed(2)

const randomDiscount = Math.round(Math.random() * 100);

const paymentValue = (sumGoods - randomDiscount) .toFixed(2);
const netProfit = Math.trunc(sumGoods) / 2 - Math.round(randomDiscount)

console.log('
Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sumGoods}
Округлена вартість всіх товарів: ${wholePrice}
Сума товарів округлена до сотень: ${roundedPrice}
Визначення парного чи непарного числа: ${isEvenNumber}
Сума решти: ${remainder}
Середнє значення цін: ${averageValue}
Рандомна знижка: ${randomDiscount}
Сума до оплати: ${paymentValue}
Чистий прибуток: ${netProfit}
 ')