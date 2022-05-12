// We always just
// import
import { getCereals } from './fetch-utils.js';
import { renderCereal } from './render-utils.js';

const main = document.querySelector('main');

// grab DOM elements with getElementById()
async function loadData() {
    const cereals = await getCereals();
    console.log(cereals);
    
    for (let cereal of cereals) {
        const cerealDiv = renderCereal(cereal);
        main.append(cerealDiv);
    }
}

loadData();

// let state


// and describe our events
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
