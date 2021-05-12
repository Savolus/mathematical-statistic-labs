import mean from './mean.js'
import { varianceStandart, varianceCorrected } from './variance.js'

export default (intervals, frequences) => {
    const variantesUnique = intervals.map(({ start, end }) => +((start + end) / 2).toFixed(5))

    let variantesNotUnique = []

    for (let i = 0; i < variantesUnique.length; i++) {
        const variantesRepeated = []

        variantesRepeated.length = frequences[i]
        variantesRepeated.fill(variantesUnique[i])

        variantesNotUnique = [...variantesNotUnique, ...variantesRepeated]
    }

    const meanValue = mean(variantesNotUnique)
    const varianceValueStandart = varianceStandart(variantesNotUnique, meanValue)
    const varianceValueCorrected = varianceCorrected(variantesNotUnique, meanValue)

    const observedValueSquared = (variantesUnique.length - 1) * varianceValueStandart / varianceValueCorrected

    const powerOfFreedom = variantesUnique.length - 3
    let criticalPointSquared = 0

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
