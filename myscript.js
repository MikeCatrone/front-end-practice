
// Testing JS //

const new_hero = (x, y, z) => {
    return {
        name: x,
        age: y,
        profession: z
    }
}

let hero1 = new_hero('Mikey', 38, 'Programmer');

console.log(`Greetings! Your current heros are: ${hero1.name} and he's a ${hero1.profession}`);
