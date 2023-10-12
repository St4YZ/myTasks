const myObject = {
    firstUsers: {
        id: 0,
        name: "Max",
        age: 15,
        man: true,
        marrried: false,
    }
}

function printObject(obj, indent = 0) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === 'object' && obj[prop] !== null) {
                // Якщо елемент є об'єктом, викликаємо функцію для виведення його вмісту
                console.log(`${' '.repeat(indent)}${prop}:`);
                printObject(obj[prop], indent + 2);
            } else {
                // Якщо елемент є примітивним значенням, виводимо його
                console.log(`${' '.repeat(indent)}${prop}: ${obj[prop]}`);
            }
        }
    }
}

printObject(myObject)

// failed task