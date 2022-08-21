for (let Index = 0; Index <= 2; Index++) {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.showNumber(3 - Index)
}
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showString("Go")
