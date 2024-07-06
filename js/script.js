"use strict";

// ! 1
// ? Завершите решение так, чтобы оно перевернуло переданную в него строку.

// function solution(str){
//     return str.split("").reverse().join('')
// }
// let origin = 'world'
// let revers = solution(origin);
// console.log(revers)

// ! 2
// ? Таракан – одно из самых быстрых насекомых. Напишите функцию,
// ? которая принимает скорость в км в час и возвращает ее в см в секунду,
// ? округляя до целого числа
// ? Например: 1.08 --> 30
// ? Примечание! Ввод представляет собой действительное число
// ? (фактический тип зависит от языка) и >= 0. Результатом должно быть целое число.
// ? x(км) * 100000(см) / 360(сек)

// function cockroachSpeed(s) {
//      let res = s * 100000 / 3600;
//     return Math.floor(res)
// }
//
// let kmHour = 1.08;
// let centimeterSeconds = cockroachSpeed(kmHour);
// console.log(centimeterSeconds);

// ! 3
// ? Вам дан массив целых чисел нечетной длины, в котором все они одинаковы,
// ? за исключением одного единственного числа.
// ? Завершите метод, который принимает такой массив и возвращает это
// ? единственное другое число.

// let arr = [17, 7, 17, 17, 1, 17];
// function findUnique(arr) {
//     // Сортируем массив
//     arr.sort((a, b) => a - b);
//
//     // Проверяем первый и второй элемент
//     if (arr[0] !== arr[1]) {
//         return arr[0];
//     } else {
//         // Если первый и второй элемент одинаковы, уникальный элемент будет последним
//         return arr[arr.length - 1];
//     }
// }
// // Пример использования
// console.log(findUnique(arr));

// ! 4
// ? Учитывая месяц как целое число от 1 до 12, верните,
// ? к какому кварталу года он принадлежит, как целое число.

// const quarterOf = (month) => {
//     let quarters = 0;
//     if (month >= 10 && month <= 12) {
//         quarters = 4;
//     } else if (month >= 1 && month <= 3) {
//         quarters = 1;
//     } else if (month >= 4 && month <= 6) {
//         quarters =  2;
//     } else if (month >= 7 && month <= 9) {
//         quarters = 3;
//     }
//     return quarters
//
// }
//
// let month = 2;
// let quarter = quarterOf(month);
// console.log(quarter);

// ! 5
// ? Создайте простую функцию под названием «приветствие»,
// ? которая возвращает самое известное «привет, мир!».
// * Конечно, это настолько просто, насколько это возможно. Но насколько вы умны,
// * чтобы создать самый креативный «привет, мир», который только можно придумать?
// * Какое решение «привет, мир» вы бы хотели показать своим друзьям?


// function greet() {
//     return "hello World!";
// }
// console.log(greet())



// ! 6
// ? Завершите функцию, которая принимает два целых числа (a, b, где a < b)
// ? и возвращает массив всех целых чисел между входными параметрами, включая их.

// function between(a,b) {
//     let resultArr = []
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             resultArr.push(i)
//         }
//     }
//     return resultArr
// }
// let test = between(1,5);
// console.log(test);


// ! 7
// ? Банкоматы допускают использование 4- или 6-значных PIN-кодов,
// ? а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
// * Если функции передана действительная строка PIN-кода, верните true,
// * иначе верните false.

// function validatePIN(pin) {
//     return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
// }

// ! 8
// ? Ваша задача — создать две функции (max и min или максимум и
// ? минимум и т. д., в зависимости от языка),
// ? которые получают на вход список целых чисел и возвращают наибольшее
// ? и наименьшее число из этого списка соответственно.

// function max(arr) {
//     let maxVal = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxVal) {
//             maxVal = arr[i];
//         }
//     }
//     return maxVal;
// }
//
// function min(arr) {
//     let minVal = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < minVal) {
//             minVal = arr[i];
//         }
//     }
//     return minVal;
// }
//
// let numbers = [-52, 56, 30, 29, -54, 0, -110];
// console.log(max(numbers));
// console.log(min(numbers));

// ! 9
// ? Напишите функцию, которая удаляет
// ? пробелы из строки, а затем возвращает результирующую строку.

// function noSpace(x) {
//    let test = x.split('');
//    let res = test.filter(function(x) {
//        return x !== ' ';
//    })
//    return res.join('');
// }
//
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// function init(x) {
//     return x.split(" ").join('');
// }
// console.log(init('8 j 8   mBliB8g  imjB8B8  jl  B'));

// ! 10
// ? Месси — футболист, забивший голы в трёх лигах:
// ? Ла Лига
// ? Кубок Испании
// ? Чемпионы
// ? Завершите функцию, чтобы вернуть общее количество голов во всех трех лигах.
// ? Примечание: ввод всегда будет действительным.

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }
// let res = goals(5,10,2);
// console.log(res);


// ! 11
// ? Функция перемещения терминала в игре
// ? В этой игре герой движется слева направо.
// ? Игрок бросает кубик и дважды перемещает количество мест, указанное на кубике.
// ? Создайте функцию для терминальной игры, которая принимает
// ? текущую позицию героя и делает бросок (1-6) и возвращает новую позицию.

// function move(position,roll) {
//     const x = roll * 2;
//     return position + x;
// }
// let res = move(3,6);
// console.log(res);


