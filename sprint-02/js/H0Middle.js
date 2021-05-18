import mean from './mean.js'
import { varianceCorrected } from './variance.js'
import criticalPointTValue from './criticalPointTValue.js'
import laplaceIntegralFunctionReversed from './laplaceIntegralFunctionReversed.js'

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

    const n1 = variantes1Unique.length, n2 = variantes2Unique.length
    const powerOfFreedom = n1 + n2 - 2

    // T
    const observedValueT = Math.abs(mean1Value - mean2Value) / Math.sqrt((n1 * variance1Value + n2 * variance2Value) / powerOfFreedom * (1 / n1 + 1 / n2))
    const criticalPointValueT = criticalPointTValue(powerOfFreedom)

    // Z
    const observedValueZ = Math.abs(mean1Value - mean2Value) / Math.sqrt(variance1Value / n1 + variance2Value / n2)
    const criticalPointValueZ = laplaceIntegralFunctionReversed((1 - 0.05) / 2) // a=0.05

    return {
        H0: {
            T: observedValueT < criticalPointValueT,
            Z: observedValueZ < criticalPointValueZ
        },
        result: {
            T: {
                observedValueT,
                criticalPointValueT
            },
            Z: {
                observedValueZ,
                criticalPointValueZ
            }
        }
    }
}
