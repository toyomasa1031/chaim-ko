input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
radio.setGroup(1)
