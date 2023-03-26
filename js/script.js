"use strict";
// Напишите функцию, которая вычисляет среднее значение
// чисел в заданном списке. Примечание.
// Пустые массивы должны возвращать 0.

// function findAverage(array) {
//     let res = 0;
//     if (array.length !== 0) {
//         for (let elem of array) {
//             res += elem;
//         }
//     }
//     return res / array.length;
// }
// findAverage([52,39,26,76,92,46,65,78,28]);
// Напишите функцию для преобразования имени в инициалы.
// Это ката строго состоит из двух слов с одним пробелом между ними.
// На выходе должны быть две заглавные буквы с точкой,
// разделяющей их. Это должно выглядеть так:
// Sam Harris => S.H
// patrick feeney => P.F

// function abbrevName(name){
//     let res = name.split(' ');
//     let arr = [];
//     for (let i = 0; i < res.length; i++) {
//         arr.push(res[i][0].toUpperCase());
//     }
//     let result = String(arr);
//     let z = result.split('').slice(0,1) + '.' + result.slice(2,3);
//     console.log(z);
//     return z;
// }
// abbrevName('vladimir Pulin');

// Дезоксирибонуклеиновая кислота, ДНК является основной молекулой хранения информации
// в биологических системах. Он состоит из четырех оснований нуклеиновых кислот гуанина
// («G»), цитозина («C»), аденина («A») и тимина («T»). Рибонуклеиновая кислота, РНК,
// является основной молекулой-мессенджером в клетках. РНК немного отличается от ДНК своей химической
// структурой и не содержит тимина. В РНК тимин заменен другой нуклеиновой кислотой урацилом («U»). Создайте функцию,
// которая переводит заданную строку ДНК в РНК. Например: "GCAT" => "GCAU" Входная строка может быть произвольной длины,
// в частности, она может быть пустой. Все входные данные гарантированно верны, т. е.
// каждая входная строка будет состоять только из букв «G», «C», «A» и/или «T»
// function DNAtoRNA(dna) {
//     return dna.replace(/T/g, "U");
// }
// Сможете ли вы найти иголку в стоге сена? Напишите функцию findNeedle(),
// которая принимает массив, полный мусора, но содержащий одну «иглу».
// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки),
// в котором говорится: "найдена игла в положении " плюс индекс, в котором она нашла иглу,
// поэтому: Пример (ввод --> вывод)
// ["сено", "хлам", "сено", "сено", "moreJunk", "needle", "randomJunk"] --> "найдена игла в позиции 5"
// Примечание.
// В COBOL должно возвращаться сообщение «стрелка найдена в позиции 6».

// function findNeedle(haystack) {
//     console.log(`found the needle at position ${haystack.indexOf('needle')}`)
//         return `found the needle at position ${haystack.indexOf('needle')}`;
// }
// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0»,
// а любую цифру 5 и выше на «1». Верните полученную строку. Примечание:
// ввод никогда не будет пустой строкой

// function fakeBin(x){
//     let arr = x.split('');
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 5){
//             arr[i] = '0';
//         } else if (arr[i] >= 5) {
//             arr[i] = '1';
//         }
//     }
//     let result = arr.join('')
//     console.log(result);
//     return result;
// }
// fakeBin('1234555');
// вожможный вариант решения это не я решал скопировал для себя чтобы знать
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// Создайте функцию с двумя аргументами, которая будет
// возвращать массив первых n кратных x. Предположим,
//     что и заданное число, и количество подсчетов
// будут положительными числами больше 0.
// Возвращайте результаты в виде массива или списка
// (в зависимости от языка).
// Примеры countBy(1,10) === [1,2,3,4,5,6,7,8,9,10] countBy(2,5) === [2,4,6,8,10]
// function countBy(x, n) {
//     let z = [];
//     let sum = x * n;
//     for (let i = 1; i <= sum; i++) {
//         if (i % x === 0) {
//             z.push(i);
//         }else if (n % i === 0) {
//             z.push(i);
//         }
//     }
//     console.log(z);
//
//     return z;
// }
// countBy(93,5);
// Вы получаете массив чисел, возвращаете сумму всех положительных.
//     Пример [1,-4,7,12] => 1 + 7 + 12 = 20 Примечание:
//     если суммировать нечего, сумма по умолчанию равна 0.

// function positiveSum(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         if (elem > 0) {
//             sum += elem;
//         }
//     }
//     console.log(sum);
//     return sum;
// }
// positiveSum([]);

// Учитывая массив целых чисел в виде строк и чисел,
// верните сумму значений массива, как если бы все они были числами.
// Верните ответ в виде числа.

// function sumMix(x){
// let sum = 0;
//     for (let elem of x) {
//         sum += +elem;
//     }
//     console.log(sum);
// return sum;
// }
// sumMix(['1','2','3']);

// Учитывая массив целых чисел, вернуть новый массив с удвоением каждого значения.
//     Например:
// [1, 2, 3] --> [2, 4, 6]

// function maps(x){
// let arr = [];
//     for (let elem of x) {
//         arr.push(elem * 2);
//     }
//     console.log(arr);
//     return arr;
// }
//
// maps([1,2,3]);
// function maps(x){
//    let arr = x.map((elem) => elem * 2);
//     console.log(arr)
//     return arr;
// }
//
// maps([1,2,3]);

// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число,
// а затем суммировала результаты. Например, для [1, 2, 2] он должен вернуть 9,
// потому что 1 2 + 2 2 + 2 2 "=" 9 1 2 +2 2 +2 2 =9.

// function squareSum(numbers){
// let sum = 0;
// numbers.forEach(function (elem) {
//     return sum += elem ** 2;
// })
//     console.log(sum);
//     return sum;
// }
// squareSum([1,2,2]);

// Даны два целых числа a и b, которые могут быть
// положительными или отрицательными, найдите сумму
// всех целых чисел между ними и включая их и верните ее.
// Если два числа равны, верните a или b.
// Примечание: a и b не упорядочены!
// Примеры (а, б) --> вывод (пояснение) (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1, так как оба одинаковы)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Ваша функция должна возвращать только число, а не объяснение того, как вы получили это число.

// function getSum(a, b) {
//     let min = Math.min(a, b),
//         max = Math.max(a, b),
//         sum = max;
//     for (let i = min; i < max; i++) sum += i;
//     console.log(sum);
//     return sum;
// }
// getSum(-269,-243);

// Это довольно просто. Ваша цель — создать функцию,
// которая удаляет первый и последний символы строки.
// Вам дан один параметр, исходная строка. Вам не нужно
// беспокоиться о строках, содержащих менее двух символов.

// function removeChar(str){
//     let res = str.split('').slice(1).slice(0,-1).join('');
//
//     console.log(res);
//     return res;
//
// }
// removeChar('vladimir');

// Завершите функцию, которая принимает строковый
// параметр и переворачивает каждое слово в строке.
// Все пробелы в строке должны быть сохранены.
// function reverseWords(str) {
//     let res = str.split('').reverse().join('').split(' ').reverse().join(' ');
//     console.log(res)
//
//   return res;
// }
//
// reverseWords("This is an example!");
//
// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел.
// Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел,
// вы должны вернуть 0.
// Примеры
// Ввод: [1, 5.2, 4, 0, -1] Выход: 9,2
// Вход: [] Выход: 0
// Ввод: [-2,398]
// Выход: -2,398
// Предположения Вы можете считать, что вам даны только цифры.
// Вы не можете предположить размер массива. Вы можете предположить, что вы получили массив,
// и если массив пуст, верните 0. Что мы тестируем Мы тестируем базовые циклы и математические операции.
// Это для новичков, которые только изучают циклы и математические операции. Продвинутым пользователям это может
// показаться очень простым, и они могут легко записать это в одну строку.

// function sum(numbers) {
//     // "use strict";
//     let sumArr = 0;
//     numbers.forEach((elem) => sumArr += elem);
//     // for (let i = 0; i < numbers.length; i++) {
//     //     sumArr += numbers[i];
//     // }
//     console.log(sumArr);
//     return sumArr;
//
// }
// sum([1, 5.2, 4, 0, -1]);

// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для
// заданного массива минимум из 4 положительных целых чисел. Не будут переданы числа с
// плавающей запятой или неположительные целые числа. Например, когда массив передается как
// [19, 5, 42, 2, 77], вывод должен быть 7. [10, 343445353, 3453445, 3453545353453] должен вернуть 3453455.

// function sumTwoSmallestNumbers(mas) {
//     let sum = 0;
//     mas.sort(new Function ('a, b', 'return a - b'));
//     let arr = mas.slice(0,2);
//     arr.forEach((el) => sum += el);
//     // for (let i = 0; i < arr.length; i++) {
//     //     sum += arr[i];
//     // }
//     console.log(sum);
// return sum;
// }
// sumTwoSmallestNumbers([19, 5, 42, 2, 77]);


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr (n, s) {
//     let str = '';
//     for (let i = 0; i < n; i++) {
//         str += s;
//     }
//     let res = str.split(' ').join(' ')
//     console.log(res);
//     return res;
// }
// repeatStr(3,'*');













