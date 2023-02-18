basic.forever(function () {
    led.plotBarGraph(
    Math.map(input.temperature(), 0, 30, 0, 15),
    30
    )
})
