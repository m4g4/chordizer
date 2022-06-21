
Chordizer.H = function (parentElemId, attributes) {
    this.addChord(parentElemId, "H", 2, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["D", "G", "H"]);
}

/* Mol chords */

Chordizer.Hm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Hm", 2, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(2, "H")
        .addFretPress(3, ["D", "G"]);
}

Chordizer.Hm7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Hm7", 2, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(2, "H")
        .addFretPress(3, ["D"]);
}

/* # chords */
