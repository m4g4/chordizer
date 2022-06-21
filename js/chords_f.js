
Chordizer.F = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F", 1, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A", "D"]);
}

/* Mol chords */

Chordizer.Fm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fm", 1, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D"]);
}


/* # chords */

Chordizer.Fis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#", 2, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A", "D"]);
}

/* Mol chords */

Chordizer.Fism = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#m", 2, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D"]);
}
