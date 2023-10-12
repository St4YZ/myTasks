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
    console.log("User's name:" + info.name + "\n" + "User's age:" + info.age)
}
getUserInfo(myUser)

function getUserAddress (addrs) {
    console.log("User's email:" + addrs.email + "\n" + "User's city:" + addrs.address.city + "\n" + "User's postal:" + addrs.address.postalCode)
}
getUserAddress(myUser)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Advanced task will come soon