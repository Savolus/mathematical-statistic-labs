import criticalPointFisher from './criticalPointFisher.js'
import mean from './mean.js'
import { varianceStandart, varianceCorrected } from './variance.js'

export default (intervals1, frequences1, intervals2, frequences2) => {
    const variantes1Unique = intervals1.map(({ start, end }) => +((start + end) / 2).toFixed(5))
    const variantes1NotUnique = []

    for (let i = 0; i < variantes1Unique.length; i++) {
        const variantesRepeated = []

        variantesRepeated.length = frequences1[i]
        variantesRepeated.fill(variantes1Unique[i])

        variantes1NotUnique.push(...variantesRepeated)
    }

    const mean1Value = mean(variantes1NotUnique)
    const variance1Value = varianceCorrected(variantes1NotUnique, mean1Value)

    
    const variantes2Unique = intervals2.map(({ start, end }) => +((start + end) / 2).toFixed(5))
    const variantes2NotUnique = []

    for (let i = 0; i < variantes2Unique.length; i++) {
        const variantesRepeated = []

        variantesRepeated.length = frequences2[i]
        variantesRepeated.fill(variantes2Unique[i])

        variantes2NotUnique.push(...variantesRepeated)
    }

    const mean2Value = mean(variantes2NotUnique)
    const variance2Value = varianceCorrected(variantes2NotUnique, mean2Value)

    let observedValue = 0, powerOfFreedom1 = 0, powerOfFreedom2 = 0

    if (variance1Value > variance2Value) {
        observedValue = variance1Value / variance2Value
        powerOfFreedom1 = variantes1Unique.length - 1
        powerOfFreedom2 = variantes2Unique.length - 1
    } else {
        observedValue = variance2Value / variance1Value
        powerOfFreedom1 = variantes2Unique.length - 1
        powerOfFreedom2 = variantes1Unique.length - 1
    }

    observedValue = Math.abs(observedValue)

    const criticalPointValue = criticalPointFisher(powerOfFreedom1, powerOfFreedom2)

    return {
        H0: observedValue < criticalPointValue,
        result: {
            observedValue,
            criticalPointValue,
            variance1Value,
            variance2Value,
            powerOfFreedom1,
            powerOfFreedom2
        }
    }
}
