radio.onReceivedNumber(function (receivedNumber) {
    if (No == 0) {
        if (receivedNumber == 22) {
            load(3)
            ring.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.showIcon(IconNames.Yes)
            music.playMelody("G G A C5 C5 C5 - - ", 500)
            basic.pause(1000)
            basic.showIcon(IconNames.Yes)
            ring.showColor(neopixel.colors(NeoPixelColors.Black))
            No = 1
        }
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
let No = 0
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
    if (No == 1) {
        basic.pause(1000)
        No = 0
    }
})
