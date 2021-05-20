import mean from "./mean.js";
import { varianceCorrected } from "./variance.js";
import zScore from './zScore.js'

export default (sample, p) => {
    const z = zScore(p)
    const s = Math.sqrt(varianceCorrected(sample, mean(sample)))

    const upper = s - z * s / Math.sqrt(sample.length)
    const lower = s + z * s / Math.sqrt(sample.length)

    return [s, upper, lower]
}
