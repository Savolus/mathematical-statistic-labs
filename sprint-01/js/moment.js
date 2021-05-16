export default (sample, mean, n) => sample.reduce((acc, value) => acc += ((value - mean) ** n), 0) / (sample.length - 1)
