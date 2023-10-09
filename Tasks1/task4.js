// FIRST EXAMPLE
/*
function divideArray(numbers) {

    try {
        if (numbers.length < 2) {
            throw new Error("This array has less than 2 elems")
        }
        let result = [];
        for (let i = 1; i < numbers.length; i++) {
            // console.log(numbers[i - 1]);
            if (numbers[i - 1] === 0  || typeof numbers[i] !== 'number' || typeof numbers[i - 1] !== 'number')  {
                throw new Error("There's 0 or String in numbers")
            }
            result.push(numbers[i] / numbers[i - 1])
        }
        return result
    }
    catch (ex) {
        console.error("outer", ex.message);
    }
    finally {
        console.log('Work is done')
    }
}

console.log(divideArray([10, 2, 5]), "\n"); // Результат
console.log(divideArray([5, 0, 2]), "\n"); // Помилка
console.log(divideArray([10, 'abc', 2]), "\n"); // Помилка
console.log(divideArray([3]), "\n"); // Помилка
 */

// SECOND EXAMPLE
function divideArray(arr) {
    try {
        if (arr.length < 2) {
            throw new Error("array less then 2");
        }

        const result = arr.slice(1).map((currentValue, index) => {
            // console.log(currentValue);
            // console.log(arr[index]);

            if (typeof currentValue !== "number"  || typeof arr[index] !== "number"  || arr[index] === 0) {
                throw new Error("array contains non numbers or zeros.");
            }
            return currentValue / arr[index];
        });

        console.log(result);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("End");
    }
}

console.log(divideArray([10, 2, 5]), "\n"); // Результат
console.log(divideArray([5, 0, 2]), "\n"); // Помилка
console.log(divideArray([10, 'abc', 2]), "\n"); // Помилка
console.log(divideArray([3]), "\n"); // Помилка


