import table from './table.js'
import calc from './calc.js'

const taskDataElement = document.querySelector('.task-data')
const taskElement = document.querySelector('.task')

const amountOfAFactorsElement = taskDataElement.querySelector('#amount-A')
const amountOfBFactorsElement = taskDataElement.querySelector('#amount-B')
const levelOfSignificanceElement = taskDataElement.querySelector('#significance')

const calculationTaskElement = taskElement.querySelector('.action-calculation')
const tableDataElement = taskDataElement.querySelector('.input-table')

const alpha = 0.05

console.log(calc(table, alpha))


const parseTable = (tableElement) => {
    const trs = [...tableElement.querySelectorAll('tr')]

    console.log(trs)
}

calculationTaskElement.addEventListener('click', () => {
    const table = parseTable(tableDataElement)
})
