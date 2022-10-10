radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
