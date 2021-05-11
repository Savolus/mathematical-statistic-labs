import mean from './mean.js'
import variance from './variance.js'

const t = (x, meanValue, deviationValue) => Math.abs(x - meanValue) / deviationValue
const f = t => Math.exp((t ** 2) / -2) / Math.sqrt(2 * Math.PI)
const n = (value, mult, meanValue, deviationValue) => mult * f(t(value, meanValue, deviationValue))

export default (values, step, alpha) => {
    const meanValue = mean(values)
    const varianceValue = variance(values, meanValue)
    const deviationValue = Math.sqrt(varianceValue)

    let observedValueSquared = 0

    for (let i = 0; i < values.length; i++) {
        const ni = n(values[i], (values.length * step) / deviationValue, meanValue, deviationValue)
        
        observedValueSquared += ((values[i] - ni) ** 2) / ni
    }

    const powerOfFreedom = values.length - 3

    let criticalPointSquared = null
    
    // table for alpha=7
    switch (powerOfFreedom) {
        case 1: criticalPointSquared = 3.84; break
        case 2: criticalPointSquared = 5.99; break
        case 3: criticalPointSquared = 7.82; break
        case 4: criticalPointSquared = 9.49; break
        case 5: criticalPointSquared = 11.07; break
        case 6: criticalPointSquared = 12.59; break
        case 7: criticalPointSquared = 14.07; break
        case 8: criticalPointSquared = 15.510; break
        case 9: criticalPointSquared = 16.92; break
        case 10: criticalPointSquared = 18.310; break
    }

    return observedValueSquared < criticalPointSquared
}
