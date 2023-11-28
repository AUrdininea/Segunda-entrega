
const cardContain = document.getElementById("card-container");

pintaCards(cardArray);

function pintaCards(arrayPintar) {
    cardContain.innerHTML = '';
    arrayPintar.forEach(element => {
        cardContain.innerHTML += 
`<article class="card">
    <header class="card-header">
        <img src= ${element.imagen} alt=${element.title} class="card-img"
            loading="lazy">
            <div class="card-info">
                <h2 class="card-info-title">${element.category}</h2>
                <p class="card-info-text">${element.info}</p>
            </div>
    </header>
    <div class="card-body">
        <h2 class="card-title">${element.title}</h2>
        <p class="card-description">${element.description}</p>
        <div class="card-values">
            <div class="card-date">${formatDate(element.dateCard)}</div>
            <div class="card-price">$${element.price}</div>
        </div>
    </div>
    <footer class="card-footer">
        <a href="#" class="card-btn">Ver mas</a>
        <button class="card-btn">Comprar</button>
    </footer>
</article>`

    });
}
