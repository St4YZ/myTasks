let yearsOfExperience = 0.499
function declarationOfSalary (years) {
    if(years <= 0.5){
        console.log("Worker's salary is: ", 0)
    }
    else if(years > 0.5 && years <= 1){
        console.log("Worker's salary is: ", 100 + 100 * 0.01)
    }
    else if(years > 1 && years <= 2){
        console.log("Worker's salary is: ", 333 + 333 * 0.03)
    }
    else if(years > 2 && years <= 4){
        console.log("Worker's salary is: ", 555 + 555 * 0.04)
    }
    else if(years >= 4){
        console.log("Worker's salary is: ", 666 + years * 666)
    }
}

declarationOfSalary(yearsOfExperience)