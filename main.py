def on_received_number(receivedNumber):
    if receivedNumber == 22:
        basic.show_icon(IconNames.YES)
radio.on_received_number(on_received_number)

def on_forever():
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
def load(times: number):
    for index in range(times):
        for index2 in range(16):
            ring.set_pixel_color((index2 + 0) % 16, neopixel.rgb(0, 0, 0))
            ring.set_pixel_color((index2 + 4) % 16, neopixel.rgb(0, 0, 0))
            ring.set_pixel_color((index2 + 8) % 16, neopixel.rgb(0, 0, 0))
            ring.set_pixel_color((index2 + 12) % 16, neopixel.rgb(0, 0, 0))
            ring.show()
            basic.pause(70)
            ring.set_pixel_color((index2 + 0) % 16, neopixel.colors(NeoPixelColors.BLUE))
            ring.set_pixel_color((index2 + 4) % 16, neopixel.colors(NeoPixelColors.BLUE))
            ring.set_pixel_color((index2 + 8) % 16, neopixel.colors(NeoPixelColors.BLUE))
            ring.set_pixel_color((index2 + 12) % 16, neopixel.colors(NeoPixelColors.BLUE))
            ring.show()
ring: neopixel.Strip = None
radio.set_group(1)
basic.forever(on_forever)
ring = neopixel.create(DigitalPin.P2, 16, NeoPixelMode.RGB)
load(5)
basic.forever(on_forever)