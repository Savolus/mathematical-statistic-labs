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
            input.placeholder = Math.random().toFixed(3)

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
    
    const theadElement = task1Element.querySelector('[data-thead]')
    const tbodyElement = task1Element.querySelector('[data-tbody]')

    const table = parseTable(dataElement)
    const alpha = 0.05



    // chart1 = new Chart(chart1ElementContext, {
    //     type: 'bar',
    //     data: {
    //         labels: resultedSample,
    //         datasets: [{
    //             label: 'Variation Series',
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: frequenceArr
    //         }]
    //     }
    // })
})

calculateTask2Element.addEventListener('click', () => {
    const table = parseTable(dataElement)

})

calculateTask3Element.addEventListener('click', () => {   
    const table = parseTable(dataElement)

})
