let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];


function searchFunc () {
    for(let el of nestedArray){
        for(let element of el){
            if(element === "cat"){
                console.log(element)
            }
        }
    }
}

searchFunc(nestedArray)