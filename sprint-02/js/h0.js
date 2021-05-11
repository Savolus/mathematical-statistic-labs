import mean from './mean.js'
import variance from './variance.js'

const u = (x, meanValue, deviationValue) => (x - meanValue) / deviationValue
const f = u => Math.exp((u ** 2) / 2) / Math.sqrt(2 * Math.PI)
const n = (x, mult, meanValue, deviationValue) => mult * f(u(x, meanValue, deviationValue))

export default (values, intervals) => {
    const xs = intervals.map(({ start, end }) => +((end + start) / 2).toFixed(5))
    const meanValue = mean(xs)
    const varianceValue = variance(xs, meanValue)
    const deviationValue = Math.sqrt(varianceValue)

    let observedValueSquared = 0

    for (let i = 0; i < xs.length; i++) {
        const step = +(intervals[i].end - intervals[i].start).toFixed(5)
        const ni = n(xs[i], (values.length * step) / deviationValue, meanValue, deviationValue)
        
        observedValueSquared += ((xs[i] - ni) ** 2) / ni
    }

    const powerOfFreedom = values.length - 3

    let criticalPointSquared = null
    
    // table for alpha=0.05
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
