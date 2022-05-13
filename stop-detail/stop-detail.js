import { renderCerealDetail } from '../render-utils.js';
import { getCereal } from '../fetch-utils.js';

const individualCereal = document.getElementById('individualCereal');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const cereal = await getCereal(id);
    const render = renderCerealDetail(cereal);
    individualCereal.append(render);
}

loadData();
