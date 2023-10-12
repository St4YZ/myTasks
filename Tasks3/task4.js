const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

function myFunc(books) {
    for(const el of books) {
        while (el.title !== "The Great Gatsby") {
            console.log(el)
            break;
        }
        if (el.year > 1940) {
            console.log(Object.keys(el),Object.values(el))
        }
        if (el.author === "George Orwell"){
            el.author = "Liuba Antonyuk"
            console.log(el);
        }
    }
}

myFunc(englishBooks)