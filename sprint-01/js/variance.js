export default (sample, mean) => sample.reduce((acc, value) => acc += ((value - mean) ** 2), 0) / sample.length
