import H0Pirson from "./H0Pirson.js"
import H0Fisher from './H0Fisher.js'
import H0TValue from './H0TValue.js'

const changeAmountElement = document.querySelector('#amount')
const dataElement = document.querySelector('.data')

const task1Element = document.querySelector('.task-1')
const task2Element = document.querySelector('.task-2')
const task3Element = document.querySelector('.task-3')

const calculateTask1Element = task1Element.querySelector('.calculate')
const calculateTask2Element = task2Element.querySelector('.calculate')
const calculateTask3Element = task3Element.querySelector('.calculate')

const dataTask2Element = task2Element.querySelector('.data')
const dataTask3Element = task3Element.querySelector('.data')

const changeAmountTask2Element = task2Element.querySelector('#amount')
const changeAmountTask3Element = task3Element.querySelector('#amount')

const chart1Element = task1Element.querySelector('#chart-1')
const chart1ElementContext = chart1Element.getContext('2d')

let chart1 = null

const parseTable = tableElement => {
    const trs = [...tableElement.querySelectorAll('tr')]
    const table = []

    trs.forEach(tr => {
        const start = tr.querySelector('[data-start]')
        const end = tr.querySelector('[data-end]')
        const value = tr.querySelector('[data-value]')

        table.push({
            start: +(start.value || start.placeholder),
            end: +(end.value || end.placeholder),
            value: +(value.value || value.placeholder)
        })
    })

    return table
}

changeAmountElement.addEventListener('change', () => {
    dataElement.innerHTML = ''

    const size = changeAmountElement.value

    for (let i = 0; i < size; i++) {
        const tr = document.createElement('tr')

        for (let j = 0; j < 3; j++) {
            const td = document.createElement('td')
            const input = document.createElement('input')

            input.type = 'text'
            input.placeholder = (Math.random() * 10).toFixed(3)

            switch (j) {
                case 0:
                    input.dataset.start = ''
                    break
                case 1:
                    input.dataset.end = ''
                    break
                case 2:
                    input.dataset.value = ''
                    break
            }

            td.appendChild(input)
            tr.appendChild(td)
        }

        dataElement.appendChild(tr)
    }
})

changeAmountTask2Element.addEventListener('change', () => {
    dataTask2Element.innerHTML = ''

    const size = changeAmountTask2Element.value

    for (let i = 0; i < size; i++) {
        const tr = document.createElement('tr')

        for (let j = 0; j < 3; j++) {
            const td = document.createElement('td')
            const input = document.createElement('input')

            input.type = 'text'
            input.placeholder = (Math.random() * 10).toFixed(3)

            switch (j) {
                case 0:
                    input.dataset.start = ''
                    break
                case 1:
                    input.dataset.end = ''
                    break
                case 2:
                    input.dataset.value = ''
                    break
            }

            td.appendChild(input)
            tr.appendChild(td)
        }

        dataTask2Element.appendChild(tr)
    }
})

changeAmountTask3Element.addEventListener('change', () => {
    dataTask3Element.innerHTML = ''

    const size = changeAmountTask3Element.value

    for (let i = 0; i < size; i++) {
        const tr = document.createElement('tr')

        for (let j = 0; j < 3; j++) {
            const td = document.createElement('td')
            const input = document.createElement('input')

            input.type = 'text'
            input.placeholder = (Math.random() * 10).toFixed(3)

            switch (j) {
                case 0:
                    input.dataset.start = ''
                    break
                case 1:
                    input.dataset.end = ''
                    break
                case 2:
                    input.dataset.value = ''
                    break
            }

            td.appendChild(input)
            tr.appendChild(td)
        }

        dataTask3Element.appendChild(tr)
    }
})

calculateTask1Element.addEventListener('click', () => {
    chart1 && chart1.destroy()
    
    const theadIntervalElement = task1Element.querySelector('[data-thead-interval]')
    const tbodyIntervalElement = task1Element.querySelector('[data-tbody-interval]')

    const hypothesisH0Element = task1Element.querySelector('[data-hypothesis-0]')
    const hypothesisH0ObservedElement = task1Element.querySelector('[data-hypothesis-0-observed]')
    const hypothesisH0CriticalPointElement = task1Element.querySelector('[data-hypothesis-0-critical]')
    const hypothesisH0PowerOfFreedomElement = task1Element.querySelector('[data-hypothesis-0-power]')
    const tbodyIterationElement = task1Element.querySelector('[data-tbody-iteration]')

    theadIntervalElement.innerHTML = ''
    tbodyIntervalElement.innerHTML = ''

    const table = parseTable(dataElement)

    const intervalStrings = table.map(({ start, end }) => `[${start}, ${end})`)
    const intervals = table.map(({ start, end }) => { return { start, end }})
    const frequences = table.map(({ value }) => value)

    const sum = frequences.reduce((acc, value) => acc += value)
    const relatives = frequences.map(value => value / sum)

    const intervalTR = document.createElement('tr')

    intervalStrings.forEach(interval => {
        const th = document.createElement('th')
        const input = document.createElement('input')

        input.type = 'text'
        input.readOnly = true
        input.value = interval
        input.classList.add('centered')
        input.classList.add('content')

        th.appendChild(input)
        intervalTR.appendChild(th)
    })

    theadIntervalElement.appendChild(intervalTR)

    const valueTR = document.createElement('tr')

    frequences.forEach(value => {
        const td = document.createElement('td')
        const input = document.createElement('input')

        input.type = 'text'
        input.readOnly = true
        input.value = value
        input.classList.add('centered')
        input.classList.add('content')

        td.appendChild(input)
        valueTR.appendChild(td)
    })

    tbodyIntervalElement.appendChild(valueTR)

    const frequenceTR = document.createElement('tr')

    relatives.forEach(relatives => {
        const td = document.createElement('td')
        const input = document.createElement('input')

        input.type = 'text'
        input.readOnly = true
        input.value = relatives.toFixed(5)
        input.classList.add('centered')
        input.classList.add('content')

        td.appendChild(input)
        frequenceTR.appendChild(td)
    })

    tbodyIntervalElement.appendChild(frequenceTR)

    chart1 = new Chart(chart1ElementContext, {
        type: 'bar',
        data: {
            labels: intervalStrings,
            datasets: [{
                label: 'Interval statistical series',
                backgroundColor: 'rgb(255, 99, 132, .75)',
                borderColor: 'rgb(255, 99, 132)',
                data: frequences
            }]
        }
    })

    const { H0: H0Answer, table: H0Table, result: H0Results } = H0Pirson(intervals, frequences)

    hypothesisH0Element.value = `${H0Answer} => ${H0Answer ? 'Approved' : 'Not approved'}`
    hypothesisH0ObservedElement.value = H0Results.observedValue
    hypothesisH0CriticalPointElement.value = H0Results.criticalPointValue
    hypothesisH0PowerOfFreedomElement.value = H0Results.powerOfFreedom

    H0Table.forEach(iteration => {
        const hypothesisH0TR = document.createElement('tr')

        for (const key in iteration) {
            const td = document.createElement('td')
            const input = document.createElement('input')

            input.type = 'text'
            input.readOnly = true
            input.value = +iteration[key].toFixed(5)
            input.classList.add('centered')
            input.classList.add('content')

            td.appendChild(input)
            hypothesisH0TR.appendChild(td)
        }

        tbodyIterationElement.appendChild(hypothesisH0TR)
    })

    task1Element.querySelector('.action-answer').style.display = 'block'
})

calculateTask2Element.addEventListener('click', () => {
    const hypothesisH0Element = task2Element.querySelector('[data-hypothesis-0]')
    const hypothesisH0ObservedElement = task2Element.querySelector('[data-hypothesis-0-observed]')
    const hypothesisH0CriticalPointElement = task2Element.querySelector('[data-hypothesis-0-critical]')
    const hypothesisH0PowerOfFreedom1Element = task2Element.querySelector('[data-hypothesis-0-power-1]')
    const hypothesisH0PowerOfFreedom2Element = task2Element.querySelector('[data-hypothesis-0-power-2]')
    const hypothesisH0Variance1Element = task2Element.querySelector('[data-hypothesis-0-variance-1]')
    const hypothesisH0Variance2Element = task2Element.querySelector('[data-hypothesis-0-variance-2]')
    
    const sample1 = parseTable(dataElement)
    const sample2 = parseTable(dataTask2Element)

    const intervals1 = sample1.map(({ start, end }) => { return { start, end }})
    const frequences1 = sample1.map(({ value }) => value)
    
    const intervals2 = sample2.map(({ start, end }) => { return { start, end }})
    const frequences2 = sample2.map(({ value }) => value)

    const { H0: H0Answer, result: H0Results } = H0Fisher(intervals1, frequences1, intervals2, frequences2)

    hypothesisH0Element.value = `${H0Answer} => ${H0Answer ? 'Approved' : 'Not approved'}`
    hypothesisH0ObservedElement.value = H0Results.observedValue
    hypothesisH0CriticalPointElement.value = H0Results.criticalPointValue
    hypothesisH0PowerOfFreedom1Element.value = H0Results.powerOfFreedom1
    hypothesisH0PowerOfFreedom2Element.value = H0Results.powerOfFreedom2
    hypothesisH0Variance1Element.value = H0Results.variance1Value
    hypothesisH0Variance2Element.value = H0Results.variance2Value

    task2Element.querySelector('.action-answer').style.display = 'block'
})

calculateTask3Element.addEventListener('click', () => {
    const hypothesisH0Element = task3Element.querySelector('[data-hypothesis-0]')
    const hypothesisH0ObservedElement = task3Element.querySelector('[data-hypothesis-0-observed]')
    const hypothesisH0CriticalPointElement = task3Element.querySelector('[data-hypothesis-0-critical]')
    const hypothesisH0PowerOfFreedomElement = task3Element.querySelector('[data-hypothesis-0-power]')

    const sample1 = parseTable(dataElement)
    const sample2 = parseTable(dataTask3Element)

    const intervals1 = sample1.map(({ start, end }) => { return { start, end }})
    const frequences1 = sample1.map(({ value }) => value)
    
    const intervals2 = sample2.map(({ start, end }) => { return { start, end }})
    const frequences2 = sample2.map(({ value }) => value)

    const { H0: H0Answer, result: H0Results } = H0TValue(intervals1, frequences1, intervals2, frequences2)

    hypothesisH0Element.value = `${H0Answer} => ${H0Answer ? 'Approved' : 'Not approved'}`
    hypothesisH0ObservedElement.value = H0Results.observedValue
    hypothesisH0CriticalPointElement.value = H0Results.criticalPointValue
    hypothesisH0PowerOfFreedomElement.value = H0Results.powerOfFreedom

    task3Element.querySelector('.action-answer').style.display = 'block'
})
