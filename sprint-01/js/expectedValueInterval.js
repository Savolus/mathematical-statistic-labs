import mean from "./mean.js";
import { varianceCorrected } from "./variance.js";
import zScore from './zScore.js'

export default (sample, p) => {
    const x = mean(sample)
    const z = zScore(p)
    const s = Math.sqrt(varianceCorrected(sample, x))

    const upper = x - z * s / Math.sqrt(sample.length)
    const lower = x + z * s / Math.sqrt(sample.length)

    return [x, upper, lower]
}
