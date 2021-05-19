export default (tableElement) => {
    const trs = [...tableElement.querySelectorAll('tr')]
    const table = []

    trs.forEach(tr => {
        const tds = tr.querySelectorAll('td')
        const row = []

        tds.forEach(td => {
            const textarea = td.querySelector('textarea')

            if (!textarea) {
                return
            }

            const str = textarea.value || textarea.placeholder
            const sample = str.trim().replace(/\s+/g, '').split(',').map(variant => +variant)

            row.push({ sample })
        })

        if (!row.length) {
            return
        }

        table.push(row)
    })

    return table
}
