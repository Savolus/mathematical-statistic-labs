export default sample => {
    const mid = ~~(sample.length / 2)

    if (mid % 2 !== 0) {
        return (sample[mid] + sample[mid - 1]) / 2
    }

    return sample[mid]
}
