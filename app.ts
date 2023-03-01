const person: object = {
    name: "Dan",
    age: 37

}

console.log(person.nickname)

/*
JS objects have key value pairs:  {
    key: value
}
TS object types have key: type pairs so; 

const jsObject = {
    name: "Benson",
    id: 12345

}
if you hover over an object in IDE it shows this => 


const jsObject: {
    name: string;
    id: number;
}

there are subtle differences, this is generic - better to be more specific: object, however 
.name / .age will not work, you need to be even more specific. see below: 
*/

const individual: {name: string; age: number;} = {
    name: "BigDave",
    age: 44
}

/* I get it, its far more explicit in what the object is. */