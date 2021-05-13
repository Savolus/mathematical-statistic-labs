export default k => {
    let criticalPointValue = 0

    switch (k) {
        case 1: criticalPointValue = 3.84; break
        case 2: criticalPointValue = 5.99; break
        case 3: criticalPointValue = 7.82; break
        case 4: criticalPointValue = 9.49; break
        case 5: criticalPointValue = 11.07; break
        case 6: criticalPointValue = 12.59; break
        case 7: criticalPointValue = 14.07; break
        case 8: criticalPointValue = 15.510; break
        case 9: criticalPointValue = 16.92; break
        case 10: criticalPointValue = 18.310; break
    }

    return criticalPointValue
}
