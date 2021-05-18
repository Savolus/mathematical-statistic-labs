import mean from './mean.js'
import table from './table.js'
import FCritical from './FCritical.js'

const alpha = 0.05

const q = table.length
const p = table[0].length
const n = table[0][0].sample.length
const N = table.reduce((acc, item) => {
    return acc + item.reduce((acc, { sample }) => {
        return acc + sample.length
    }, 0)
}, 0)

table.forEach(factorB => {
    factorB.forEach(factorA => {
        factorA.mean = +mean(factorA.sample).toFixed(2)
    })
})

const meanRows = []

for (let column = 0; column < table[0].length; column++) {
    meanRows[column] = 0

    for (let row = 0; row < table.length; row++) {
        meanRows[column] += table[row][column].mean
    }

    meanRows[column] /= q
    meanRows[column] = +meanRows[column].toFixed(2) 
}

const meanColumns = []

for (let row = 0; row < table.length; row++) {
    meanColumns[row] = 0

    for (let column = 0; column < table[row].length; column++) {
        meanColumns[row] += table[row][column].mean
    }

    meanColumns[row] /= p
    meanColumns[row] = +meanColumns[row].toFixed(2) 
}

const meanSum = +(
    meanColumns.reduce((acc, meanValue) => {
        return acc + meanValue
    }, 0) / q
).toFixed(2)

// console.log(JSON.stringify(table, null, 2))

console.table({ meanRows, meanColumns })
console.table({ meanSum })

const Q1 = +(
    n * q * meanRows.reduce((acc, meanValue) => {
        return acc + (meanValue - meanSum) ** 2
    }, 0)
).toFixed(4)

const Q2 = +(
    n * p * meanColumns.reduce((acc, meanValue) => {
        return acc + (meanValue - meanSum) ** 2
    }, 0)
).toFixed(4)

const k1 = p - 1
const k2 = q - 1

const S1 = +(Q1 / k1).toFixed(4)
const S2 = +(Q2 / k2).toFixed(4)

const Q3 = +(
    n * meanColumns.reduce((acc, zMean, index) => {
        return acc + meanRows.reduce((acc, yMean, jndex) => {
            return acc + (table[index][jndex].mean - zMean - yMean + meanSum) ** 2
        }, 0)
    }, 0)
).toFixed(4)

const k3 = k1 * k2
const S3 = +(Q3 / k3).toFixed(4)

const Q4 = +(
    meanColumns.reduce((acc, _, index) => {
        return acc + meanRows.reduce((acc, _, jndex) => {
            return acc + table[index][jndex].sample.reduce((acc, variant) => {
                return acc + (variant - table[index][jndex].mean) ** 2
            }, 0)
        }, 0)
    }, 0)
).toFixed(4)

const k4 = N - p * q
const S4 = +(Q4 / k4).toFixed(4)

const Q = +(
    meanColumns.reduce((acc, _, index) => {
        return acc + meanRows.reduce((acc, _, jndex) => {
            return acc + table[index][jndex].sample.reduce((acc, variant) => {
                return acc + (variant - meanSum) ** 2
            }, 0)
        }, 0)
    }, 0)
).toFixed(4)

const k = N - 1
const S = +(Q / k).toFixed(4)

console.table({ Q1, Q2, Q3, Q4, Q })
console.table({ k1, k2, k3, k4, k })
console.table({ S1, S2, S3, S4, S })

const FA = +(S1 / S4).toFixed(2)
const FB = +(S2 / S4).toFixed(2)
const FAB = +(S3 / S4).toFixed(2)

console.table({ FA, FB, FAB })

const F1 = FCritical(alpha, k1, k4)
const F2 = FCritical(alpha, k2, k4)
const F3 = FCritical(alpha, k3, k4)

console.table({ F1, F2, F3 })

console.log(FA < F1, FB < F2, FAB < F3)
