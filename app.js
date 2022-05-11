// We always just
// import
import { cereals } from './cereals-data.js';
import { renderCereal } from './render-utils.js';

// grab DOM elements with getElementById()
async function loadData() {
    const cereals = getCereals();
    console.log(cereals);
    const main = document.querySelector('main');

    for (let cereal of cereals) {
        const cerealDiv = renderCereal(cereal);
        cerealListEl.append(cerealDiv);
    }
}

loadData();


// let state



// and describe our events
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
