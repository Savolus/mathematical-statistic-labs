export default frequence => {
    const cpy = {...frequence}
    const maxes = {}
    let lastKey = null

    while (true) {
        const keys = Object.keys(cpy)
        const key = keys.reduce((a, b) => cpy[a] > cpy[b] ? a : b)

        if (!lastKey) {
            lastKey = key
            maxes[key] = cpy[key]
            
            continue
        }

        if (maxes[lastKey] !== cpy[key]) {
            break
        }

        maxes[key] = cpy[key]
        lastKey = key

        delete cpy[key]
    }

    return maxes
}
