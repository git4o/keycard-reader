def on_received_number(receivedNumber):
    global No
    if No == 0:
        if receivedNumber == 22:
            load(3)
            ring.show_color(neopixel.colors(NeoPixelColors.GREEN))
            basic.show_icon(IconNames.YES)
            basic.pause(1000)
            basic.show_icon(IconNames.YES)
            ring.show_color(neopixel.colors(NeoPixelColors.BLACK))
            No = 1
radio.on_received_number(on_received_number)

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
No = 0
ring: neopixel.Strip = None
radio.set_group(1)
ring = neopixel.create(DigitalPin.P2, 16, NeoPixelMode.RGB)

def on_forever():
    global No
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
    if No == 1:
        basic.pause(1000)
        No = 0
basic.forever(on_forever)
music.play_melody("G G A C5 C5 C5 - - ", 500)
