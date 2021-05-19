import calc from './calc.js'
import parseTable from './parseTable.js'

const taskDataElement = document.querySelector('.task-data')
const taskElement = document.querySelector('.task')

const amountOfAFactorsElement = taskDataElement.querySelector('#amount-A')
const amountOfBFactorsElement = taskDataElement.querySelector('#amount-B')
const levelOfSignificanceElement = taskDataElement.querySelector('#significance')

const calculationTaskElement = taskElement.querySelector('.action-calculation')
const tableDataElement = taskDataElement.querySelector('.input-table')
const tableAnswerElement = taskElement.querySelector('.answer-table')

const renderDataTable = () => {
    const A_factor = +amountOfAFactorsElement.value
    const B_factor = +amountOfBFactorsElement.value

    tableDataElement.innerHTML = ''

    for (let i = 0; i <= B_factor + 1; i++) {
        const tr = document.createElement('tr')

        for (let j = 0; j <= A_factor; j++) {
            const td = document.createElement('td')

            if (i === 0) {
                if (j === 0) {
                    td.rowSpan = 2
                    td.innerHTML = 'B factor'
                } else if (j === 2) {
                    td.colSpan = A_factor
                    td.innerHTML = 'A factor'
                } else {
                    continue
                }
            } else if (i === 1) {
                if (j === 0) {
                    continue
                } else {
                    td.innerHTML = `A${j}`
                }
            }

            if (i !== 0 && j === 0) {
                td.innerHTML = `B${i - 1}`
            }

            if (i !== 0 && i !== 1 && j !== 0) {
                const textarea = document.createElement('textarea')

                textarea.rows = 3

                td.appendChild(textarea)
            }

            tr.appendChild(td)
        }

        tableDataElement.appendChild(tr)
    }
}

const renderAnswerTable = data => {
    const answerActionElement = taskElement.querySelector('.action-answer')

    const A_factor = +amountOfAFactorsElement.value
    const B_factor = +amountOfBFactorsElement.value

    tableAnswerElement.innerHTML = ''

    const { table, means, Q, k, S, F } = data

    let row = 0, column = 0

    for (let i = 0; i < B_factor + 4; i++) {
        const tr = document.createElement('tr')

        for (let j = 0; j < A_factor * 2 + 5; j++) {
            const td = document.createElement('td')

            if (i === 0) {
                if (j === 0) {
                    td.rowSpan = 3
                    td.colSpan = 2
                    td.innerHTML = 'B factor'
                } else if (j === 2) {
                    td.colSpan = A_factor * 2
                    td.innerHTML = 'A factor'
                } else if (j === A_factor * 2 + 3) {
                    td.rowSpan = 3
                    td.innerHTML = 'Rows mean'
                } else if (j === A_factor * 2 + 4) {
                    td.rowSpan = 3
                    td.innerHTML = 'General mean'
                } else {
                    continue
                }
            } else if (i === 1) {
                if ((j % 2) && j < A_factor * 2) {
                    td.colSpan = 2
                    td.innerHTML = `A${~(j / 2) + 1}`
                } else {
                    continue
                }
            } else if (i === 2) {
                if (j > 1 && j < A_factor * 2 + 2 && !(j % 2)) {
                    td.innerHTML = `Block ${~~(j / 2)}`
                } else if (j > 1 && j < A_factor * 2 + 2 && (j % 2)) {
                    td.innerHTML = `Block mean`
                } else {
                    continue
                }
            } else if (i === 3 && j === A_factor * 2 + 3) {
                td.rowSpan = B_factor
                td.innerHTML = means.meanSum
            } else if (i < B_factor + 3){
                if (j === 0) {
                    td.innerHTML = `B${i - 2}`

                    row++
                    column = 0
                } else if (j === 1) {
                    td.innerHTML = `Block ${i - 2}`
                } else if (j > 1 && j < A_factor * 2 + 2 && !(j % 2)) {
                    const { sample } = table[row - 1][column]

                    let str = sample.reduce((acc, variant) => acc += `${variant}, `, '')
                    str = str.slice(0, str.length - 2)

                    td.innerHTML = str

                    column++
                } else if (j > 1 && j < A_factor * 2 + 2 && (j % 2)) {
                    td.innerHTML = table[row - 1][column - 1].mean
                }  else if (j > 1 && j === A_factor * 2 + 2) {
                    td.innerHTML = means.meanColumns[row - 1]
                } else {
                    continue
                }
            } else if (i === B_factor + 3) {
                if (j === 0) {
                    td.innerHTML = 'Columns mean'
                    td.colSpan = 2

                    column = 0
                } else if ((j % 2) && j < A_factor * 2 + 1) {
                    td.innerHTML = means.meanRows[column]
                    td.colSpan = 2

                    column++
                } else if (j > A_factor * 2 + 2) {
                } else {
                    continue
                }
            }

            tr.appendChild(td)
        }

        tableAnswerElement.appendChild(tr)
    }

    answerActionElement.style.display = 'block'
}

amountOfAFactorsElement.addEventListener('change', renderDataTable)
amountOfBFactorsElement.addEventListener('change', renderDataTable)

calculationTaskElement.addEventListener('click', () => {
    const alpha = +levelOfSignificanceElement.value
    const table = parseTable(tableDataElement)

    renderAnswerTable(calc(table, alpha))
})
