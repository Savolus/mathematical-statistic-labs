import mean from './mean.js'
import { varianceCorrected } from './variance.js'
import laplaceIntegralFunction from './laplaceIntegralFunction.js';
import criticalPoint from './criticalPoint.js';

export default (intervals, frequences) => {
    const variantesUnique = intervals.map(({ start, end }) => +((start + end) / 2).toFixed(5))
    const variantesNotUnique = []

    for (let i = 0; i < variantesUnique.length; i++) {
        const variantesRepeated = []

        variantesRepeated.length = frequences[i]
        variantesRepeated.fill(variantesUnique[i])

        variantesNotUnique.push(...variantesRepeated)
    }

    const meanValue = mean(variantesNotUnique)
    const varianceValue = varianceCorrected(variantesNotUnique, meanValue)
    const deviationValue = Math.sqrt(varianceValue)

    const n = variantesNotUnique.length
    let observedValue = 0

    const table = []

    for (let i = 0; i < intervals.length; i++) {
        const xi = intervals[i].start
        const xi_next = intervals[i].end
        const ni = frequences[i]

        let x1 = (xi - meanValue) / deviationValue
        let x2 = (xi_next - meanValue) / deviationValue
    
        let x1_sign = false
        let x2_sign = false

        if (x1 < 0) {
            x1 = -x1
            x1_sign = true
        }

        if (x2 < 0) {
            x2 = -x2
            x2_sign = true
        }

        let F1 = laplaceIntegralFunction(x1)
        let F2 = laplaceIntegralFunction(x2)

        if (x1_sign) {
            F1 = -F1
        }
        if (x2_sign) {
            F2 = -F2
        }

        const pi = F2 - F1
        const ni_stroke = n * pi

        const Ki = ((ni - ni_stroke) ** 2) / ni_stroke

        table.push({ xi, xi_next, ni, x1, x2, F1, F2, pi, ni_stroke, Ki })

        observedValue += Ki
    }

    const k = variantesUnique.length - 3

    // table for alpha=0.05
    const criticalPointValue = criticalPoint(k)

    return {
        H0: observedValue < criticalPointValue,
        table,
        result: {
            observedValue,
            criticalPointValue,
            powerOfFreedom: k
        }
    }
}
