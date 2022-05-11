export function renderCereal() {
    const cerealDiv = document.createElement('div');
    const img = document.createElement('img');
    const a = document.createElement('a');
    
    div.classList.add('stop');
    img.src = stop.image;

    a.href = `./stop-detail/?id=${cereal.id}`;

    a.append(img);
    div.append(a);
    return div;
}
