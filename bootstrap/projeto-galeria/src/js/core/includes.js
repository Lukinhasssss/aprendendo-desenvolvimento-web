import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if (!loadHtmlSuccessCallbacks.includes(callback)) { // Se a callback não estiver incluida neste array...
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) { // função que vai ler todos os atributos [wm-include], ou seja, o parent é a tag que tem o atributo [wm-include]
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(index, element) {
        const url = $(element).attr('wm-include') // attr() Pega o valor do atributo
        $.ajax({
            url,
            success(data) { // success pega o resultado obtido
                $(element).html(data) // .html pega o resultado que foi obtido pelo success e coloca dentro do elemento
                $(element).removeAttr('wm-include')

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(element)
            }
        })
    })
}

loadIncludes()