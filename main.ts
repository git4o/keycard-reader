radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 22) {
        load(5)
        ring.clear()
        basic.showIcon(IconNames.Yes)
        ring.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        ring.clear()
    }
})
function load (times: number) {
    for (let index = 0; index < times; index++) {
        for (let index2 = 0; index2 <= 15; index2++) {
            ring.setPixelColor((index2 + 0) % 16, neopixel.rgb(0, 0, 0))
            ring.setPixelColor((index2 + 4) % 16, neopixel.rgb(0, 0, 0))
            ring.setPixelColor((index2 + 8) % 16, neopixel.rgb(0, 0, 0))
            ring.setPixelColor((index2 + 12) % 16, neopixel.rgb(0, 0, 0))
            ring.show()
            basic.pause(70)
            ring.setPixelColor((index2 + 0) % 16, neopixel.colors(NeoPixelColors.Blue))
            ring.setPixelColor((index2 + 4) % 16, neopixel.colors(NeoPixelColors.Blue))
            ring.setPixelColor((index2 + 8) % 16, neopixel.colors(NeoPixelColors.Blue))
            ring.setPixelColor((index2 + 12) % 16, neopixel.colors(NeoPixelColors.Blue))
            ring.show()
        }
    }
}
let ring: neopixel.Strip = null
radio.setGroup(1)
ring = neopixel.create(DigitalPin.P2, 16, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
