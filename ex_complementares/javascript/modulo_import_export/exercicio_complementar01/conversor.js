function converterCelsius(temperatura) {
    return (temperatura * 1.8) + 32
}

function converterFahrenheit(temperatura) {
    return (temperatura - 32) / 1.8
}

export {converterCelsius, converterFahrenheit };