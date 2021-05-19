const varianceStandart = (sample, mean) => sample.reduce((acc, value) => acc += ((value - mean) ** 2), 0) / sample.length
const varianceCorrected = (sample, mean) => sample.reduce((acc, value) => acc += ((value - mean) ** 2), 0) / (sample.length - 1)

export {
    varianceStandart,
    varianceCorrected
}
