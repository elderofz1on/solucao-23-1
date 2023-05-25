basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P1))
    basic.pause(100)
})
