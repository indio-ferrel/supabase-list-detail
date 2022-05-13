export function renderCereal(cereal) {
    const cerealDiv = document.createElement('div');
    const img = document.createElement('img');
    const a = document.createElement('a');
    
    cerealDiv.classList.add('stop');
    img.src = `../assets/${cereal.image}.jpg`;

    a.href = `./stop-detail/?id=${cereal.id}`;

    a.append(img);
    cerealDiv.append(a);
    return cerealDiv;
}

export function renderCerealDetail(cereal) {
    const div = document.createElement('div');
    div.classList.add('cereal-detail');

    const h2 = document.createElement('h2');
    h2.textContent = cereal.name;

    const img = document.createElement('img');
    img.src = `../assets/${cereal.image}.jpg`;

    const p = document.createElement('p');
    p.textContent = `${cereal.name} has been assigned a health rating of ${cereal.health} and a deliciousness rating of ${cereal.deliciousness} by an independent ratings board.`;

    div.append(h2, img, p);
    return div;
}
