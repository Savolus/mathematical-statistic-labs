export default title => {
    const containerDivElement = document.createElement('div')
    const containerSpanElement = document.createElement('span')

    containerDivElement.classList.add('section')
    containerDivElement.classList.add('full')

    containerSpanElement.innerHTML = title
    containerSpanElement.classList.add('title')
    containerSpanElement.classList.add('main')
    containerSpanElement.classList.add('without')

    containerDivElement.appendChild(containerSpanElement)

    return containerDivElement
}
