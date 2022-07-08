const name = 'nhj';
let age = 29;
const hasHobbies = true;

age = 30;

const summerizeUser = (userName, userAge, userHasHobby) => {
    this
    return ('name : ' + userName +
        ', age : ' + userAge +
        ', has hobby ? : ' + userHasHobby);
}
/*
function summerizeUser(userName, userAge, userHasHobby) {
    return ('name : ' + userName + ', age : ' + userAge + ', has hobby ? : ' + userHasHobby);
}
*/

//const add = (a, b) => a + b;
//const addOne = a => a + 1;
const addRandom = () => 2 + 3;

//console.log(add(1, 2));
//console.log(addOne(1));
console.log(addRandom());


console.log(summerizeUser(name, age, hasHobbies));
// 실행 위해 터미널 bash에서
// node play.js

//-----------------------------
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(`Hi, I'm ` + this.name);
    }
};
person.greet();

//-----------------------------
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}

// map은 new array
console.log(hobbies.map(hobby => {
    return 'Hobby : ' + hobby;
}));
console.log(hobbies);

//-----------------------------
