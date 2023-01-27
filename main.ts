radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 22) {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
