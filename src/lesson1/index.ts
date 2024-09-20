//Task 1.
// Дана строка "Node.js course". Виведіть в консоль довжину цієї строки.
const word = "Node.js course"

console.log(word)


//Task 2.
// Дано число 33. Напишіть функції що приймає на вхід дане число та видає це
// число помножене на 2 стільки разів, з скількох символів складається число.
// Підказка: Для числа 33 це 2 рази (число складається із двох символів).
// Вирішені задачки пушимо в створений бранч та додаємо мене в ревьювери

let someNumber = 33

const multiNumberOfLength = (num: number): number => {
    return num * num.toString().length
}

console.log(multiNumberOfLength(someNumber));