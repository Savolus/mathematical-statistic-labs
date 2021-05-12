const varianceCorrected = (sample, mean) => sample.reduce((acc, value) => acc += ((value - mean) ** 2), 0) / (sample.length - 1)
const varianceStandart = (sample, mean) => sample.reduce((acc, value) => acc += ((value - mean) ** 2), 0) / sample.length

export {
    varianceStandart,
    varianceCorrected
}
