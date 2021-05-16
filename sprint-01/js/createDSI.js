export default (value, title, classes = {}) => {
    const { div, span, input } = classes

    const divElement = document.createElement('div')
    const spanElement = document.createElement('span')
    const inputElement = document.createElement('input')

    divElement.classList.add('section')

    div && div.forEach(className => {
        divElement.classList.add(className)
    })

    spanElement.innerHTML = title
    spanElement.classList.add('title')

    span && span.forEach(className => {
        spanElement.classList.add(className)
    })

    inputElement.value = +value ? +value.toFixed(5) : value
    inputElement.type = 'text'
    inputElement.readOnly = true

    input && input.forEach(className => {
        inputElement.classList.add(className)
    })

    divElement.appendChild(spanElement)
    divElement.appendChild(inputElement)

    return divElement
}
