import H0 from "./H0.js"

const changeAmountElement = document.querySelector('#amount')
const dataElement = document.querySelector('.data')

const task1Element = document.querySelector('.task-1')
const task2Element = document.querySelector('.task-2')
const task3Element = document.querySelector('.task-3')

const calculateTask1Element = task1Element.querySelector('.calculate')
const calculateTask2Element = task2Element.querySelector('.calculate')
const calculateTask3Element = task3Element.querySelector('.calculate')

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

calculateTask1Element.addEventListener('click', () => {
    chart1 && chart1.destroy()
    
    const significanceElement = task1Element.querySelector('[data-significance]')

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
    const alpha = 0.05

    significanceElement.value = alpha

    const intervalStrings = table.map(({ start, end }) => `[${start}, ${end})`)
    const intervals = table.map(({ start, end }) => { return { start, end }})
    const values = table.map(({ value }) => value)

    const sum = values.reduce((acc, value) => acc += value)
    const frequences = values.map(value => value / sum)

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

    values.forEach(value => {
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

    frequences.forEach(frequence => {
        const td = document.createElement('td')
        const input = document.createElement('input')

        input.type = 'text'
        input.readOnly = true
        input.value = frequence.toFixed(5)
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
                data: values
            }]
        }
    })

    const { H0: H0Answer, table: H0Table, result: H0Results } = H0(intervals, values)

    console.log(H0Answer, H0Table, H0Results)

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
    const table = parseTable(dataElement)

    task2Element.querySelector('.action-answer').style.display = 'block'
})

calculateTask3Element.addEventListener('click', () => {   
    const table = parseTable(dataElement)

    task3Element.querySelector('.action-answer').style.display = 'block'
})
