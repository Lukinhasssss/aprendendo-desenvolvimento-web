const colors = {
    p: '#388',
    div: '#1565c0',
    span: '#e53965',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#237000',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#650015',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao // Se existir this[tag] retorne this[tag] caso contrário retorne this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => { // Da um forEach em cada um dos elementos de .tag
    const tagName = elemento.tagName.toLowerCase() //tagname pega o nome da tag e toLowerCase deixa todas as letras minúsculas

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) { // Se 'nolabel' estiver contido em classList não entre | Se 'nolabel' não estiver contido em classList faça...
        const label = document.createElement('label') // document.createElement() "cria" uma tag
        /* Injetando o label em todos os elementos que estiverem marcados com a classe .tag */
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName // Coloca a tagName dentro desse label que eu acabei de criar
        elemento.insertBefore(label, elemento.childNodes[0]) // Vai inserir antes do primeiro elemento que estiver dentro de elemento
    }
})