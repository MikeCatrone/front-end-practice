
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Style Logic //

let container_opened = false;

// selectors //
const my_button = document.querySelector('.button');
const my_container = document.querySelector('.container');
const my_form = document.querySelector('.myForm');

// console.log(`${my_button.innerHTML} and ${my_container.className}`);


// Button Handler //

my_button.addEventListener('click', () => {
    console.log('Button Pressed')

    if(container_opened === false) {

        my_container.style.height='48em';
        container_opened = true;
        my_form.style.width = '65%';
        my_form.style.height = '19%';
        my_form.style.border = '4px solid navy';
        my_form.style.transition = '1.2s';
        my_form.style.padding = '0.5em';


    } else if(container_opened = true) {
        
        my_container.style.height='36.5em';
        container_opened = false;
        my_form.style.width = '0%';
        my_form.style.height = '0%';
        my_form.style.transition = '0.5s';
        my_form.style.border = 'none';
        my_form.style.padding = '0';
        
    }

    
})