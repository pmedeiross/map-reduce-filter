const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')


function showAll(productsArray) {
    myLi = ''
    productsArray.forEach((product) => {
        myLi += ` 
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p  class="item-price">R$ ${product.price}</p>
                </li> 
                `

    })

    list.innerHTML = myLi
}

function mapAll () {
    const newPrices = menuOptions.map((product) => ({
        ...product, // spread operator - exibe os itens do array de acordo como estava alterando somente o price abaixo
        price: product.price * 0.9, // 10% desconto
        
    }))
    showAll(newPrices)
}




buttonShowAll.addEventListener('click', () => showAll(menuOptions)) // -> função anônima
buttonMapAll.addEventListener('click', mapAll)


