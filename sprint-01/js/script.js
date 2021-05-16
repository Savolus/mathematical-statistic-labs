import calc from "./calc.js";
import createContainer from "./createContainer.js";
import createDSI from "./createDSI.js";
import mean from "./mean.js";
import median from "./median.js";
import mode from "./mode.js";
import moment from "./moment.js";
import { varianceStandart, varianceCorrected } from "./variance.js";

const samplesElement = document.querySelector('.data')
const changerElement = document.querySelector('#amount')

const task1Element = document.querySelector('.task-1')
const task2Element = document.querySelector('.task-2')
const task3Element = document.querySelector('.task-3')
const task4Element = document.querySelector('.task-4')
const task5Element = document.querySelector('.task-5')

const calculateTask1Element = task1Element.querySelector('.calculate')
const calculateTask2Element = task2Element.querySelector('.calculate')
const calculateTask3Element = task3Element.querySelector('.calculate')
const calculateTask4Element = task4Element.querySelector('.calculate')
const calculateTask5Element = task5Element.querySelector('.calculate')

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const parseSample = str => str.trim().replace(/\s+/g, ' ').split(' ').map(value => {
    value.includes(',') && (value = value.replace(',', '.'))

    return +value
})

const z_score = p => {
    if (p > 1) {
        p *= 0.01
    }
    if (p < 0.5) {
        return -1 * z_score(1 - p)
    }
    if (p > 0.92) {
        if (p === 1) {
            return Infinity
        }

        const temp = Math.sqrt(-1 * Math.log(1 - p))
        
        return (((2.3212128 * temp + 4.8501413) * temp - 2.2979648) * temp - 2.7871893) / ((1.6370678 * temp + 3.5438892) * temp + 1)
    }

    p -= 0.5

    const temp = Math.pow(p, 2)

    return p * (((-25.4410605 * temp + 41.3911977) * temp - 18.6150006) * temp + 2.5066282) / ((((3.1308291 * temp - 21.0622410) * temp + 23.0833674) * temp - 8.4735109) * temp + 1)
}

const expectedValueFind = (sample, p) => {
    const x = mean(sample)
    const z = z_score(p)
    const s = Math.sqrt(variance(sample, x))

    const upper = x - z * s / Math.sqrt(sample.length)
    const lower = x + z * s / Math.sqrt(sample.length)

    return [x, upper, lower]
}

const deviationFind = (sample, p) => {
    const x = mean(sample)
    const z = z_score(p)
    const s = Math.sqrt(variance(sample, x))

    const upper = s - z * s / Math.sqrt(sample.length)
    const lower = s + z * s / Math.sqrt(sample.length)

    return [s, upper, lower]
}

changerElement.addEventListener('change', () => {
    samplesElement.innerHTML = ''

    if (changerElement.value < 0 || changerElement.value > 26) {
        return
    }

    for (let i = 0; i < changerElement.value; i++) {
        const div = document.createElement('div')

        div.classList.add('section')
        div.classList.add('full')
        div.classList.add('sample-row')

        const label = document.createElement('label')

        label.innerHTML = `Sample ${alphabet[i]}:`
        label.setAttribute('for', `sample-${alphabet[i]}`.toLowerCase())

        const input = document.createElement('input')

        input.type = 'text'
        input.id = `sample-${alphabet[i]}`.toLowerCase()
        input.classList.add('fit')
        input.placeholder = '0 1 2 3 4 5 6 7 8 9'

        div.appendChild(label)
        div.appendChild(input)

        samplesElement.appendChild(div)
    }
})

calculateTask1Element.addEventListener('click', () => {
    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    const samples = []

    for (let i = 0; i < changerElement.value; i++) {
        const input = samplesElements[i].querySelector('input')

        samples.push(parseSample(input.value ? input.value : input.placeholder))
    }

    samples.forEach(sample => sample.sort((a, b) => a - b))

    const actionAnswerElement = task1Element.querySelector('.action-answer')

    actionAnswerElement.innerHTML = ''

    samples.forEach((sample, index) => {

        let variationSeriesValue = '['

        for (let i = 0; i < sample.length; i++) {
            variationSeriesValue += sample[i]

            if (i !== sample.length - 1) {
                variationSeriesValue += ', ' 
            }
        }

        variationSeriesValue += ']'

        const rangeValue = `[${sample[0]}, ${sample[sample.length - 1]}]`

        const containerDivElement = createContainer(`Sample ${alphabet[index]}:`)
        const variationSeriesDivElement = createDSI(variationSeriesValue, 'Variation Series:', { div: ['full'], input: ['full'] })
        const rangeDivElement = createDSI(rangeValue, 'Range:', { input: ['centered'] })
    
        const tableDivElement = document.createElement('div')
        const tableSpanElement = document.createElement('span')
        const tableTableElement = document.createElement('table')
        const tableTheadElement = document.createElement('thead')
        const tableTbodyElement = document.createElement('tbody')

        const thValues = ["Sample", "Frequence", "Accumulated frequence", "Relative frequence", "Cumulative relative frequence"]

        tableDivElement.classList.add('section')
        
        tableSpanElement.innerHTML = `Table:`
        tableSpanElement.classList.add('title')

        const tableTrThElement = document.createElement('tr')

        thValues.forEach(value => {
            const th = document.createElement('th')
            const input = document.createElement('input')

            input.type = 'text'
            input.value = value
            input.readOnly = true
            input.classList.add('centered')

            th.appendChild(input)
            tableTrThElement.appendChild(th)
        })

        tableTheadElement.appendChild(tableTrThElement)

        const calculatedValue = calc(sample)

        for (let i = 0; i < calculatedValue[0].length; i++) {
            const tr = document.createElement('tr')
    
            for (let j = 0; j < calculatedValue.length; j++) {
                const td = document.createElement('td')
                const input = document.createElement('input')
    
                input.type = 'text'
    
                if (j === 1) {
                    input.value = calculatedValue[j][calculatedValue[0][i]]
                } else if (j === 3 || j === 4) {
                    input.value = calculatedValue[j][i].toFixed(5)
                } else {
                    input.value = calculatedValue[j][i]
                }
    
                input.readOnly = true
                input.classList.add('centered')
    
                td.appendChild(input)
                tr.appendChild(td)
            }
    
            tableTbodyElement.appendChild(tr)
        }

        tableTableElement.appendChild(tableTheadElement)
        tableTableElement.appendChild(tableTbodyElement)

        tableDivElement.appendChild(tableSpanElement)
        tableDivElement.appendChild(tableTableElement)

        containerDivElement.appendChild(variationSeriesDivElement)
        containerDivElement.appendChild(rangeDivElement)
        containerDivElement.appendChild(tableDivElement)

        actionAnswerElement.appendChild(containerDivElement)
    })

    actionAnswerElement.style.display = 'block'
})

calculateTask2Element.addEventListener('click', () => {
    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    let samples = []

    for (let i = 0; i < changerElement.value; i++) {
        const input = samplesElements[i].querySelector('input')

        samples.push(parseSample(input.value ? input.value : input.placeholder))
    }

    samples.forEach(sample => sample.sort((a, b) => a - b))

    const actionAnswerElement = task2Element.querySelector('.action-answer')

    actionAnswerElement.innerHTML = ''

    samples.forEach((sample, index) => {
        const [resultedSample, frequenceObj,,,relativeCumulative] = calc(sample)
        const frequenceArr = []
    
        for (let i = 0; i < resultedSample.length; i++) {
            frequenceArr.push(frequenceObj[resultedSample[i]])
        }
    
        let formula = ''
    
        for (let i = 0; i < relativeCumulative.length; i++) {
            formula += `${relativeCumulative[i].toFixed(5)}, <i>`
    
            if (i === 0) {
                formula += `x &#8804; ${resultedSample[i]}`
            } else if (i === relativeCumulative.length - 1) {
                formula += `x &gt; ${resultedSample[i]}`
            } else {
                formula += `${resultedSample[i - 1]} &lt; x &#8804; ${resultedSample[i]}`
            }
    
            formula += '</i><br>'
        }

        const containerDivElement = createContainer(`Sample ${alphabet[index]}:`)
        
        const chart1DivElement = document.createElement('div')
        const chart1SpanElement = document.createElement('span')
        const chart1CanvasElement = document.createElement('canvas')
        const chart1CanvasElementContext = chart1CanvasElement.getContext('2d')

        chart1DivElement.classList.add('section')

        chart1SpanElement.innerHTML = 'Polygon chart:'
        chart1SpanElement.classList.add('title')

        chart1DivElement.appendChild(chart1SpanElement)
        chart1DivElement.appendChild(chart1CanvasElement)

        const chart2DivElement = document.createElement('div')
        const chart2SpanElement = document.createElement('span')
        const chart2CanvasElement = document.createElement('canvas')
        const chart2CanvasElementContext = chart2CanvasElement.getContext('2d')

        chart2DivElement.classList.add('section')

        chart2SpanElement.innerHTML = 'Histogram chart:'
        chart2SpanElement.classList.add('title')

        chart2DivElement.appendChild(chart2SpanElement)
        chart2DivElement.appendChild(chart2CanvasElement)

        const functionDivElement = document.createElement('div')
        const functionSpanElement = document.createElement('span')
        const functionTableElement = document.createElement('table')
        const functionTbodyElement = document.createElement('tbody')
        const functionTrElement = document.createElement('tr')

        functionDivElement.classList.add('section')

        functionSpanElement.innerHTML = 'Empirical distribution function:'
        functionSpanElement.classList.add('title')

        const functionTd1Element = document.createElement('td')
        const functionTd2Element = document.createElement('td')

        functionTd1Element.innerHTML = 'F*(x) =&nbsp;'
        functionTd2Element.innerHTML = formula

        functionTrElement.appendChild(functionTd1Element)
        functionTrElement.appendChild(functionTd2Element)

        functionTbodyElement.appendChild(functionTrElement)

        functionTableElement.appendChild(functionTbodyElement)

        functionDivElement.appendChild(functionSpanElement)
        functionDivElement.appendChild(functionTableElement)

        const chart3DivElement = document.createElement('div')
        const chart3SpanElement = document.createElement('span')
        const chart3CanvasElement = document.createElement('canvas')
        const chart3CanvasElementContext = chart3CanvasElement.getContext('2d')

        chart3DivElement.classList.add('section')

        chart3SpanElement.innerHTML = 'Empirical distribution function chart:'
        chart3SpanElement.classList.add('title')

        setTimeout(() => {
            new Chart(chart1CanvasElementContext, {
                type: 'line',
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

            new Chart(chart2CanvasElementContext, {
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

            new Chart(chart3CanvasElementContext, {
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
        }, 0)

        chart3DivElement.appendChild(chart3SpanElement)
        chart3DivElement.appendChild(chart3CanvasElement)

        containerDivElement.appendChild(chart1DivElement)
        containerDivElement.appendChild(chart2DivElement)
        containerDivElement.appendChild(functionDivElement)
        containerDivElement.appendChild(chart3DivElement)

        actionAnswerElement.appendChild(containerDivElement)
    })

    actionAnswerElement.style.display = 'block'
})

calculateTask3Element.addEventListener('click', () => {   
    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    let samples = []

    for (let i = 0; i < changerElement.value; i++) {
        const input = samplesElements[i].querySelector('input')

        samples.push(parseSample(input.value ? input.value : input.placeholder))
    }

    samples.forEach(sample => sample.sort((a, b) => a - b))

    const actionAnswerElement = task3Element.querySelector('.action-answer')

    actionAnswerElement.innerHTML = ''

    samples.forEach((sample, index) => {
        const [, frequence] = calc(sample)

        const meanValue = mean(sample)
        const medianValue = median(sample)
        const modesValue = mode(frequence)
        let modeStringValue = modesValue.reduce((str, value) => str += `${value}, `, '')
        modeStringValue = modeStringValue.slice(0, modeStringValue.length - 2)
        const varianceStandartValue = varianceStandart(sample, meanValue)
        const deviationStandartValue = Math.sqrt(varianceStandartValue)
        const coefficientValue = deviationStandartValue / meanValue
        const moment3 = moment(sample, meanValue, 3)
        const moment4 = moment(sample, meanValue, 4)
        const asymmetryValue = moment3 / (deviationStandartValue ** 3)
        const excessValue = moment4 / (deviationStandartValue ** 4) - 3
        const varianceCorrectedValue = varianceCorrected(sample, meanValue)
        const deviationCorrectedValue = Math.sqrt(varianceCorrectedValue)

        const containerDivElement = createContainer(`Sample ${alphabet[index]}:`)

        const meanDivElement = createDSI(meanValue, 'Mean:')
        const medianDivElement = createDSI(medianValue, 'Median:')
        const modeDivElement = createDSI(modeStringValue, 'Mode:')
        const varianceStandartDivElement = createDSI(varianceStandartValue, 'Sample Standart Variance:')
        const deviationStandartDivElement = createDSI(deviationStandartValue, 'Sample Standart Deviation:')
        const coefficientDivElement = createDSI(coefficientValue, 'Coefficient of variation:')
        const moment3DivElement = createDSI(moment3, 'Central Moment 3:')
        const moment4DivElement = createDSI(moment4, 'Central Moment 4:')
        const asymmetryDivElement = createDSI(asymmetryValue, 'Asymmetry:')
        const excessDivElement = createDSI(excessValue, 'Excess:')
        const varianceCorrectedDivElement = createDSI(varianceCorrectedValue, 'Sample Corrected Variance:')
        const deviationCorrectedDivElement = createDSI(deviationCorrectedValue, 'Sample Corrected Deviation:')
        
        containerDivElement.appendChild(meanDivElement)
        containerDivElement.appendChild(medianDivElement)
        containerDivElement.appendChild(modeDivElement)
        containerDivElement.appendChild(varianceStandartDivElement)
        containerDivElement.appendChild(deviationStandartDivElement)
        containerDivElement.appendChild(coefficientDivElement)
        containerDivElement.appendChild(moment3DivElement)
        containerDivElement.appendChild(moment4DivElement)
        containerDivElement.appendChild(asymmetryDivElement)
        containerDivElement.appendChild(excessDivElement)
        containerDivElement.appendChild(varianceCorrectedDivElement)
        containerDivElement.appendChild(deviationCorrectedDivElement)

        actionAnswerElement.appendChild(containerDivElement)
    })

    actionAnswerElement.style.display = 'block'
})

calculateTask4Element.addEventListener('click', () => {
    const expectedValueMomentElement = task4Element.querySelector('[data-expected-moment]')
    const varianceMomentElement = task4Element.querySelector('[data-variance-moment]')
    const deviationMomentElement = task4Element.querySelector('[data-deviation-moment]')
    const expectedValueLikelihoodElement = task4Element.querySelector('[data-expected-likelihood]')
    const varianceLikelihoodElement = task4Element.querySelector('[data-variance-likelihood]')
    const deviationLikelihoodElement = task4Element.querySelector('[data-deviation-likelihood]')

    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    let sample = []

    for (let i = 0; i < changerElement.value; i++) {
        const input = samplesElements[i].querySelector('input')

        sample.push(...parseSample(input.value ? input.value : input.placeholder))
    }

    sample.sort((a, b) => a - b)

    const expectedValueMoment = mean(sample)
    const varianceMoment = moment(sample, mean(sample), 2)
    const deviationMoment = Math.sqrt(varianceMoment)

    expectedValueMomentElement.value = expectedValueMoment.toFixed(5)
    varianceMomentElement.value = varianceMoment.toFixed(5)
    deviationMomentElement.value = deviationMoment.toFixed(5)

    const expectedValueLikelihood = mean(sample)
    const varianceLikelihood = moment(sample, mean(sample), 2)
    const deviationLikelihood = Math.sqrt(varianceLikelihood)

    expectedValueLikelihoodElement.value = expectedValueLikelihood.toFixed(10)
    varianceLikelihoodElement.value = varianceLikelihood.toFixed(10)
    deviationLikelihoodElement.value = deviationLikelihood.toFixed(10)

    task4Element.querySelector('.action-answer').style.display = 'block'
})

calculateTask5Element.addEventListener('click', () => {
    const expectedValueElement = task5Element.querySelector('[data-expected]')
    const expectedValueLowerElement = task5Element.querySelector('[data-expected-lower]')
    const expectedValueUpperElement = task5Element.querySelector('[data-expected-upper]')
    const deviationElement = task5Element.querySelector('[data-deviation]')
    const deviationLowerElement = task5Element.querySelector('[data-deviation-lower]')
    const deviationUpperElement = task5Element.querySelector('[data-deviation-upper]')
    
    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    let sample = []

    for (let i = 0; i < changerElement.value; i++) {
        const input = samplesElements[i].querySelector('input')

        sample.push(...parseSample(input.value ? input.value : input.placeholder))
    }

    sample.sort((a, b) => a - b)

    const [expectedValue, expectedValueLower, expectedValueUpper] = expectedValueFind(sample, 0.95)
    const [deviation, deviationLower, deviationUpper] = deviationFind(sample, 0.95)

    expectedValueElement.value = expectedValue.toFixed(5)
    expectedValueLowerElement.value = expectedValueLower.toFixed(5)
    expectedValueUpperElement.value = expectedValueUpper.toFixed(5)

    deviationElement.value = deviation.toFixed(5)
    deviationLowerElement.value = deviationLower.toFixed(5)
    deviationUpperElement.value = deviationUpper.toFixed(5)

    task5Element.querySelector('.action-answer').style.display = 'block'
})
