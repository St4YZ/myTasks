// *Advanced. Створіть обєкт user з властивостями name, age, email, address.
// Address має бути обєктом address: {city: "your value", postalCode: "your value"}.
// Спробуйте створити функції `getUserInfo` та `getFullAddress` в одному рядку за допомогою деструктуризації аргументу функції.

const user = {
    name: "Maksym",
    age: "22",
    email: "hanhur.maksym@gmail.com",
    address: {
        city: "Lviv",
        postalCode: "79038"
    }
}
// ------------------------------------------------------------------------------
const getUserInfo = ({name,age}) => { console.log("User name is:", name, "\n" + "User age is:",age)};
const getUserAddress = ({city,postalCode}) => { console.log("User name is:", city, "\n" + "User age is:",postalCode)};
getUserInfo(user)
getUserAddress(user.address)
// ------------------------------------------------------------------------------
// function getUserInfo ({name,age}){
//     console.log("User name is:", name, "\n" + "User age is:",age)
// }
// getUserInfo(user)
// function getFullAddress ({city,postalCode}){
//     console.log("User name is:", city, "\n" + "User age is:",postalCode)
// }
// getFullAddress(user.address)