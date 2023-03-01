const person = {
    name: "dan",
    age: 37,
    hobbies: ["football", "cooking"]

}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

// try something that should throw an error: 

for (const hobby of person.hobbies) {
    console.log(hobby.map())
}

// map is only available on arrays so this should give an error

/* error: Property 'map' does not exist on type 'string'. */
