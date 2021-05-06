import task1 from "./tasks/task1.js";

const samplesElement = document.querySelector('.data')
const changerElement = document.querySelector('#amount')

const task1Element = document.querySelector('.task-1')

const calculateTask1Element = task1Element.querySelector('.calculate')

const parseSample = str => str.trim().replace(/\s+/g, ' ').split(' ').map(value => {
    value.includes(',') && (value = value.replace(',', '.'))

    return +value
})

const renderTaks1 = table => {
    const answerActionElement = task1Element.querySelector('.action-answer')
    const answerTableElement = answerActionElement.querySelector('.answer')

    answerTableElement.innerHTML = ''

    for (let i = 0; i < table[0].length; i++) {
        const tr = document.createElement('tr')

        for (let j = 0; j < table.length; j++) {
            const td = document.createElement('td')
            const input = document.createElement('input')

            input.type = 'text'

            if (j === 1) {
                input.value = table[j][table[0][i]]
            } else if (j === 3 || j === 4) {
                input.value = table[j][i].toFixed(10)
            } else {
                input.value = table[j][i]
            }

            input.readOnly = true

            td.appendChild(input)
            tr.appendChild(td)
        }

        answerTableElement.appendChild(tr)
    }

    answerActionElement.style.display = 'block'
}

changerElement.addEventListener('change', () => {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    samplesElement.innerHTML = ''

    for (let i = 0; i < changerElement.value; i++) {
        const div = document.createElement('div')

        div.classList.add('section')
        div.classList.add('fit')

        const label = document.createElement('label')

        label.innerHTML = `Sample ${alphabet[i]}:`
        label.for = `sample-${alphabet[i]}`.toLowerCase()

        const input = document.createElement('input')

        input.type = 'text'
        input.id = `sample-${alphabet[i]}`.toLowerCase()
        input.classList.add('fit')

        div.appendChild(label)
        div.appendChild(input)

        samplesElement.appendChild(div)
    }
})

calculateTask1Element.addEventListener('click', () => {
    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    const sample = []

    for (let i = 0; i < changerElement.value; i++) {
        const input = samplesElements[i].querySelector('input')

        sample.push(...parseSample(input.value ? input.value : input.placeholder))
    }

    sample.sort((a, b) => a - b)

    const seriesElement = task1Element.querySelector('.series')
    const rangeElement = task1Element.querySelector('.range')

    let output = '['

    for (let i = 0; i < sample.length; i++) {
        output += sample[i]

        if (i !== sample.length - 1) {
            output += ', ' 
        }
    }

    output += ']'

    seriesElement.value = output
    rangeElement.value = `[${sample[0]}, ${sample[sample.length - 1]}]`

    renderTaks1(task1(sample))
})
