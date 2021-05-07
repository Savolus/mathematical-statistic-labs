export default sample => {
    const frequence = sample.reduce((acc, value) => {
        acc[value] = value in acc ? acc[value] + 1 : 1

        return acc
    }, {})

    sample = sample.filter((value, index, arr) => arr.indexOf(value) === index)

    const accumulated = []

    for (let i = 0; i < sample.length; i++) {
        if (i === 0) {
            accumulated.push(frequence[sample[i]])
            continue
        }

        accumulated.push(frequence[sample[i]] + accumulated[i - 1])
    }

    const maxAcc = accumulated[accumulated.length - 1]
    const relative = []

    for (let i = 0; i < sample.length; i++) {
        relative.push(frequence[sample[i]] / maxAcc)
    }

    const relativeCumulative = []

    for (let i = 0; i < sample.length; i++) {
        if (i === 0) {
            relativeCumulative.push(relative[i])
            continue
        }

        relativeCumulative.push(relative[i] + relativeCumulative[i - 1])
    }

    return [sample, frequence, accumulated, relative, relativeCumulative]
}
