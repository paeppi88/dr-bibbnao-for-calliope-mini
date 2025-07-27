input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    berührt()
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Programmwahl = 1
    fünf()
    reset()
})
function berührt () {
    strip.setBrightness(255)
    if (Programmwahl == 0) {
        count += 1
        if (count == 1) {
            leben1.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 2) {
            leben2.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 3) {
            leben3.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 4) {
            leben4.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count > 4) {
            leben5.showColor(neopixel.colors(NeoPixelColors.Red))
            timer_leds.showColor(neopixel.colors(NeoPixelColors.Red))
            count = 5
            Programmwahl = 10
        }
    } else if (Programmwahl == 1) {
        count += 1
        if (count == 1) {
            leben1.showColor(neopixel.colors(NeoPixelColors.Red))
            leben1b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 2) {
            leben2.showColor(neopixel.colors(NeoPixelColors.Red))
            leben2b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 3) {
            leben3.showColor(neopixel.colors(NeoPixelColors.Red))
            leben3b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 4) {
            leben4.showColor(neopixel.colors(NeoPixelColors.Red))
            leben4b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count > 4) {
            leben5.showColor(neopixel.colors(NeoPixelColors.Red))
            leben5b.showColor(neopixel.colors(NeoPixelColors.Red))
            count = 5
        }
    } else if (Programmwahl == 2) {
        count += 1
        if (count == 1) {
            leben1b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 2) {
            leben2b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 3) {
            leben3b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 4) {
            leben4b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 5) {
            leben5b.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 6) {
            leben1.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 7) {
            leben2.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 8) {
            leben3.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count == 9) {
            leben4.showColor(neopixel.colors(NeoPixelColors.Red))
        } else if (count > 9) {
            leben5.showColor(neopixel.colors(NeoPixelColors.Red))
            count = 10
        }
    }
}
function zehn () {
    fünf()
    basic.setLedColor(0xff0000)
}
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Programmwahl = 0
    normal()
    reset()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0x007fff)
    Programmwahl = 2
    zehn()
    reset()
})
function Zeit_zählen () {
    strip.setBrightness(255)
    timer_leds.setPixelColor(time, color_test)
    timer_leds.show()
    time += 1
    if (time <= 9) {
        color_test = neopixel.colors(NeoPixelColors.Green)
    } else if (time <= 14) {
        color_test = neopixel.colors(NeoPixelColors.Yellow)
    } else if (time <= 19) {
        color_test = neopixel.colors(NeoPixelColors.Red)
    } else {
        for (let index = 0; index < 5; index++) {
            berührt()
            basic.pause(100)
        }
    }
}
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    reset()
})
function normal () {
    basic.setLedColor(0xff8000)
    strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGB)
    leben1 = strip.range(36, 4)
    leben1b = strip.range(0, 4)
    leben2 = strip.range(32, 4)
    leben2b = strip.range(4, 4)
    leben3 = strip.range(28, 4)
    leben3b = strip.range(8, 4)
    leben4 = strip.range(24, 4)
    leben4b = strip.range(12, 4)
    leben5 = strip.range(20, 4)
    leben5b = strip.range(16, 4)
    timer_leds = strip.range(0, 20)
    count = 0
    color_test = neopixel.colors(NeoPixelColors.Green)
    reset()
}
function reset () {
    if (Programmwahl == 10) {
        Programmwahl = 0
    }
    count = 0
    time = 0
    color_test = neopixel.colors(NeoPixelColors.Green)
    leben1.showColor(neopixel.colors(NeoPixelColors.Black))
    leben1b.showColor(neopixel.colors(NeoPixelColors.Black))
    leben5.showColor(neopixel.colors(NeoPixelColors.Black))
    leben5b.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    leben2.showColor(neopixel.colors(NeoPixelColors.Black))
    leben2b.showColor(neopixel.colors(NeoPixelColors.Black))
    leben4.showColor(neopixel.colors(NeoPixelColors.Black))
    leben4b.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(100)
    leben3.showColor(neopixel.colors(NeoPixelColors.Black))
    leben3b.showColor(neopixel.colors(NeoPixelColors.Black))
    time = 0
    time = 0
    basic.pause(1000)
    strip.setBrightness(85)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
}
function fünf () {
    basic.setLedColor(0x007fff)
    strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGB)
    leben1 = strip.range(36, 4)
    leben1b = strip.range(0, 4)
    leben2 = strip.range(32, 4)
    leben2b = strip.range(4, 4)
    leben3 = strip.range(28, 4)
    leben3b = strip.range(8, 4)
    leben4 = strip.range(24, 4)
    leben4b = strip.range(12, 4)
    leben5 = strip.range(20, 4)
    leben5b = strip.range(16, 4)
    count = 0
}
let color_test = 0
let time = 0
let leben5b: neopixel.Strip = null
let leben4b: neopixel.Strip = null
let leben3b: neopixel.Strip = null
let leben2b: neopixel.Strip = null
let leben1b: neopixel.Strip = null
let timer_leds: neopixel.Strip = null
let leben5: neopixel.Strip = null
let leben4: neopixel.Strip = null
let leben3: neopixel.Strip = null
let leben2: neopixel.Strip = null
let leben1: neopixel.Strip = null
let count = 0
let strip: neopixel.Strip = null
let Programmwahl = 0
normal()
Programmwahl = 0
loops.everyInterval(6000, function () {
    if (Programmwahl == 0) {
        Zeit_zählen()
    }
})
