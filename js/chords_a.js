
Chordizer.A = function (parentElemId, attributes) {
    this.addChord(parentElemId, "A", 0, attributes)
        .addMute("LowE")
        .addOpenString(["A", "HighE"])
        .addFretPress(2, ["D", "G", "H"]);
}

/* Mol chords */

Chordizer.Am = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Am", 0, attributes)
        .addMute("LowE")
        .addOpenString(["A", "HighE"])
        .addFretPress(1, "H")
        .addFretPress(2, ["D", "G"]);
}

Chordizer.Am_G = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Am/G", 0, attributes)
        .addMute("A")
        .addOpenString(["G", "HighE"])
        .addFretPress(1, "H")
        .addFretPress(2, ["D"])
        .addFretPress(3, "LowE");
}

Chordizer.Am7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Am7", 0, attributes)
        .addMute("LowE")
        .addOpenString(["A", "G", "HighE"])
        .addFretPress(2, "D")
        .addFretPress(1, ["H"]);
}

/* # chords */

Chordizer.B = function (parentElemId, attributes) {
    this.addChord(parentElemId, "B", 1, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["D", "G", "H"]);
}

/* Mol chords */

Chordizer.Bm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bm", 1, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(2, "H")
        .addFretPress(3, ["D", "G"]);
}
