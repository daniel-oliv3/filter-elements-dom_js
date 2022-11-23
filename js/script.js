// obtém o elemento do filtro
const filterElement = document.querySelector("header input");

// obtém os elementos das cartas
const cards = document.querySelectorAll(".cards li");

// adiciona evento de entrada para o elemento de filtro
filterElement.addEventListener("input", filterCards);

// função de filtro
function filterCards() {
  // se o filtro não estiver vazio
  if ((filterElement.textContent = !"")) {
    // para cada carta de cartas
    for (let card of cards) {
      // obtém o título do cartão (título)
      let title = card.querySelector("h2");

      // transforma para minúsculas
      title = title.textContent.toLowerCase();

      // transforma o texto do filtro em minúsculas
      let filterText = filterElement.value.toLowerCase();
      // se o título do cartão não incluir o texto do filtro
      if (!title.includes(filterText)) {
        // esconde o elemento card
        card.style.display = "none";
      } else {
        // exibe o elemento do cartão
        card.style.display = "block";
      }
    }
  } else {
    // para cada carta de cartas
    for(let card of cards){
    // exibe o elemento do cartão
        card.style.display = "block";
    }
  }
}
