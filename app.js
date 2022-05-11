// We always just
// import
import { cereals } from './cereals-data.js';
import { renderCereal } from './utils.js';

// grab DOM elements with getElementById()
const cerealListEl = document.getElementById('cereals');

// let state
for (let cereal of cereals) {
    const cerealDiv = renderCereal(cereal);
    cerealListEl.append(cerealDiv);
}


// and describe our events
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
