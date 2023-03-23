radio.onReceivedValue(function (name, value) {
    if (name == "9") {
        basic.showString("" + (value))
        basic.pause(100)
        radio.sendValue("10", value)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
