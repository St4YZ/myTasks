// За допомогою циклу while переберіть строку “Javascript is fun”,
// якщо строка містить літеру “a” використайте оператор сontinue,
// якщо строка містить літеру “n” зупиніть виконаня за допомогою break;

const myString = "Javascript is fun"

let index = 0;

while (index < myString.length) {
    console.log(myString[index]); // виводить кожну букву рядка
    index++;
    if (myString[index] === "a") {
        continue;
    }
    if(myString[index] === "n"){
        break;
    }
}