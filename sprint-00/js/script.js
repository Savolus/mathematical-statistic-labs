import calc from "./calc.js";
import mean from "./mean.js";
import median from "./median.js";
import mode from "./mode.js";

const samplesElement = document.querySelector('.data')
const changerElement = document.querySelector('#amount')

const task1Element = document.querySelector('.task-1')
const task2Element = document.querySelector('.task-2')
const task3Element = document.querySelector('.task-3')

const calculateTask1Element = task1Element.querySelector('.calculate')
const calculateTask2Element = task2Element.querySelector('.calculate')
const calculateTask3Element = task3Element.querySelector('.calculate')

const chart1Element = task2Element.querySelector('#chart-1')
const chart2Element = task2Element.querySelector('#chart-2')
const chart3Element = task2Element.querySelector('#chart-3')

const chart1ElementContext = chart1Element.getContext('2d')
const chart2ElementContext = chart2Element.getContext('2d')
const chart3ElementContext = chart3Element.getContext('2d')

let chart1 = null, chart2 = null, chart3 = null

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
                input.value = table[j][i].toFixed(5)
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

    renderTaks1(calc(sample))
})

calculateTask2Element.addEventListener('click', () => {
    chart1 && chart1.destroy()
    chart2 && chart2.destroy()
    chart3 && chart3.destroy()

    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    let sample = []

    for (let i = 0; i < changerElement.value; i++) {
        const input = samplesElements[i].querySelector('input')

        sample.push(...parseSample(input.value ? input.value : input.placeholder))
    }

    sample.sort((a, b) => a - b)

    const [resultedSample, frequenceObj,,,relativeCumulative] = calc(sample)

    const frequenceArr = []

    for (let i = 0; i < resultedSample.length; i++) {
        frequenceArr.push(frequenceObj[resultedSample[i]])
    }

    const answerElement = task2Element.querySelector('.answer')

    let output = ''

    for (let i = 0; i < relativeCumulative.length; i++) {
        output += `${relativeCumulative[i].toFixed(5)}, <i>`

        if (i === 0) {
            output += `x &#8804; ${resultedSample[i]}`
        } else if (i === relativeCumulative.length - 1) {
            output += `x &gt; ${resultedSample[i]}`
        } else {
            output += `${resultedSample[i - 1]} &lt; x &#8804; ${resultedSample[i]}`
        }

        output += '</i><br>'
    }

    answerElement.innerHTML = output

    chart1 = new Chart(chart1ElementContext, {
        type: 'radar',
        data: {
            labels: resultedSample,
            datasets: [{
                label: 'Variation Series',
                backgroundColor: 'rgb(255, 99, 132, .5)',
                borderColor: 'rgb(255, 99, 132)',
                data: frequenceArr
            }]
        }
    })

    chart2 = new Chart(chart2ElementContext, {
        type: 'bar',
        data: {
            labels: resultedSample,
            datasets: [{
                label: 'Variation Series',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: frequenceArr
            }]
        }
    })

    chart3 = new Chart(chart3ElementContext, {
        type: 'bar',
        data: {
            labels: resultedSample,
            datasets: [{
                label: 'Variation Series',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: relativeCumulative
            }]
        }
    })

    task2Element.querySelector('.action-answer').style.display = 'block'
})

calculateTask3Element.addEventListener('click', () => {   
    const meanElement = task3Element.querySelector('[data-mean]')
    const medianElement = task3Element.querySelector('[data-median]')
    const modeElement = task3Element.querySelector('[data-mode]')
    const varianceElement = task3Element.querySelector('[data-variance]')
    const standardSampleElement = task3Element.querySelector('[data-standard=sample]')
    const coefficientElement = task3Element.querySelector('[data-coefficient]')
    const momentElement = task3Element.querySelector('[data-moment]')
    const asymmetryElement = task3Element.querySelector('[data-asymmetry]')
    const excessElement = task3Element.querySelector('[data-excess]')
    const fixedElement = task3Element.querySelector('[data-fixed]')
    const standardCorrectElement = task3Element.querySelector('[data-standard=correct]')

    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    let sample = []

    for (let i = 0; i < changerElement.value; i++) {
        const input = samplesElements[i].querySelector('input')

        sample.push(...parseSample(input.value ? input.value : input.placeholder))
    }

    sample.sort((a, b) => a - b)

    const [, frequence] = calc(sample)

    console.log(frequence)

    meanElement.value = mean(sample).toFixed(5)
    medianElement.value = median(sample)
    modeElement.value = mode(sample)

    task3Element.querySelector('.action-answer').style.display = 'block'
})
