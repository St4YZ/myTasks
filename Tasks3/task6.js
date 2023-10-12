const myUser = {
    name: "Maksym",
    age: "22",
    email: "maksym.hanhur@gmail.com",
    address: {
        city: "Lviv",
        postalCode: "79038"
    }
}

function getUserInfo (info) {
    const {name, age} = info
    console.log("User's name:" + name + "\n" + "User's age:" + age)
}
getUserInfo(myUser)

function getUserAddress (addrs) {
    const {email,address} = addrs
    const {city,postalCode} = address
    console.log("User's email:" + email + "\n" + "User's city:" + city + "\n" + "User's postal:" + postalCode)
}
getUserAddress(myUser)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Advanced task will come soon