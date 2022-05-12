export function renderCereal(cereal) {
    const cerealDiv = document.createElement('div');
    const img = document.createElement('img');
    const a = document.createElement('a');
    
    cerealDiv.classList.add('stop');
    img.src = cereal.image;

    a.href = `./stop-detail/?id=${cereal.id}`;

    a.append(img);
    cerealDiv.append(a);
    return cerealDiv;
}
