import calc from "./calc.js";
import createContainer from "./createContainer.js";
import createDSI from "./createDSI.js";
import mean from "./mean.js";
import median from "./median.js";
import mode from "./mode.js";
import moment from "./moment.js";
import { varianceStandart, varianceCorrected } from "./variance.js";
import expectedValueInterval from './expectedValueInterval.js'
import deviationValueInterval from './deviationValueInterval.js'

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
    const samples = samplesElements.reduce((samples, sampleElement) => {
        const input = sampleElement.querySelector('input')

        samples.push(parseSample(input.value ? input.value : input.placeholder))
    
        return samples
    }, [])

    const actionAnswerElement = task1Element.querySelector('.action-answer')

    actionAnswerElement.innerHTML = ''

    samples.forEach((sample, index) => {
        sample.sort((a, b) => a - b)

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
    const samples = samplesElements.reduce((samples, sampleElement) => {
        const input = sampleElement.querySelector('input')

        samples.push(parseSample(input.value ? input.value : input.placeholder))
    
        return samples
    }, [])

    const actionAnswerElement = task2Element.querySelector('.action-answer')

    actionAnswerElement.innerHTML = ''

    samples.forEach((sample, index) => {
        sample.sort((a, b) => a - b)

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
    const samples = samplesElements.reduce((samples, sampleElement) => {
        const input = sampleElement.querySelector('input')

        samples.push(parseSample(input.value ? input.value : input.placeholder))

        return samples
    }, [])

    const actionAnswerElement = task3Element.querySelector('.action-answer')

    actionAnswerElement.innerHTML = ''

    samples.forEach((sample, index) => {
        sample.sort((a, b) => a - b)

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
    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    const samples = samplesElements.reduce((samples, sampleElement) => {
        const input = sampleElement.querySelector('input')

        samples.push(parseSample(input.value ? input.value : input.placeholder))
    
        return samples
    }, [])

    const actionAnswerElement = task4Element.querySelector('.action-answer')

    actionAnswerElement.innerHTML = ''

    samples.forEach((sample, index) => {
        sample.sort((a, b) => a - b)

        const meanValue = mean(sample)
        const varianceValue = varianceStandart(sample, meanValue)
        const deviationValue = Math.sqrt(varianceValue)

        const containerDivElement = createContainer(`Sample ${alphabet[index]}:`)
        
        const meanMomentDivElement = createDSI(meanValue, 'Expected Value (Moment\'s method):')
        const varianceMomentDivElement = createDSI(varianceValue, 'Variance Value (Moment\'s method):')
        const deviationMomentDivElement = createDSI(deviationValue, 'Deviation Value (Moment\'s method):')

        const meanLikelihoodDivElement = createDSI(meanValue, 'Expected Value (Likelihood\'s method):')
        const varianceLikelihoodDivElement = createDSI(varianceValue, 'Variance Value (Likelihood\'s method):')
        const deviationLikelihoodDivElement = createDSI(deviationValue, 'Deviation Value (Likelihood\'s method):')

        containerDivElement.appendChild(meanMomentDivElement)
        containerDivElement.appendChild(varianceMomentDivElement)
        containerDivElement.appendChild(deviationMomentDivElement)

        containerDivElement.appendChild(meanLikelihoodDivElement)
        containerDivElement.appendChild(varianceLikelihoodDivElement)
        containerDivElement.appendChild(deviationLikelihoodDivElement)

        actionAnswerElement.appendChild(containerDivElement)
    })

    actionAnswerElement.style.display = 'block'
})

calculateTask5Element.addEventListener('click', () => {
    const samplesElements = [...samplesElement.querySelectorAll('.section')]
    const samples = samplesElements.reduce((samples, sampleElement) => {
        const input = sampleElement.querySelector('input')

        samples.push(parseSample(input.value ? input.value : input.placeholder))

        return samples
    }, [])

    const actionAnswerElement = task5Element.querySelector('.action-answer')

    actionAnswerElement.innerHTML = ''

    samples.forEach((sample, index) => {
        sample.sort((a, b) => a - b)

        const [meanValue, meanValueLower, meanValueUpper] = expectedValueInterval(sample, 0.95)
        const [deviationValue, deviationValueLower, deviationValueUpper] = deviationValueInterval(sample, 0.95)

        const containerDivElement = createContainer(`Sample ${alphabet[index]}:`)
        
        const meanDivElement = createDSI(meanValue, 'Expected Value (Central interval):')
        const meanLowerDivElement = createDSI(meanValueLower, 'Expected Value (Lower interval):')
        const meanUpperDivElement = createDSI(meanValueUpper, 'Expected Value (Upper interval):')

        const deviationDivElement = createDSI(deviationValue, 'Expected Value (Central interval):')
        const deviationLowerDivElement = createDSI(deviationValueLower, 'Variance Value (Lower interval):')
        const deviationUpperDivElement = createDSI(deviationValueUpper, 'Deviation Value (Upper interval):')

        containerDivElement.appendChild(meanDivElement)
        containerDivElement.appendChild(meanLowerDivElement)
        containerDivElement.appendChild(meanUpperDivElement)

        containerDivElement.appendChild(deviationDivElement)
        containerDivElement.appendChild(deviationLowerDivElement)
        containerDivElement.appendChild(deviationUpperDivElement)

        actionAnswerElement.appendChild(containerDivElement)
    })

    actionAnswerElement.style.display = 'block'
})
