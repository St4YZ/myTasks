// a) Дано масив, виведіть лише непарні числа з масиву.
const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56]
function unPair () {
    for(let el of array){
        if(el % 2){
            console.log(el)
        }
    }
}
unPair(array)

// b) Дано масив сonst замініть слово “apple” на якесь інше.
arrayColors = ["yellow", "green",  "apple", "red", "apple", "pink", "apple", "apple"]
function replaceWord (){
    const targetStr = "apple"
    const replacementStr = "orange"
    return arrayColors.map(item => (item === targetStr ? replacementStr : item));
}

console.log(replaceWord(arrayColors));
