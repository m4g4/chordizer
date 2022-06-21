
Chordizer.C = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 0, attributes)
        .addMute("LowE")
        .addOpenString(["G", "HighE"])
        .addFretPress(3, "A")
        .addFretPress(2, "D")
        .addFretPress(1, "H");
}

Chordizer.Cv2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 5, attributes)
        .addBarre(1, "D", "H")
        .addFretPress(4, ["LowE", "HighE"])
        .addFretPress(3, "A");
}

Chordizer.Cv3 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 3, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["G", "D", "H"]);
}

Chordizer.Cv4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 8, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A", "D"]);
}

Chordizer.Cv5 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 10, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, "D")
        .addFretPress(3, ["G", "HighE"])
        .addFretPress(4, "H");
}

Chordizer.Cmaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cmaj7", 0, attributes)
        .addMute("LowE")
        .addOpenString(["G", "H", "HighE"])
        .addFretPress(3, "A")
        .addFretPress(2, "D");
}

Chordizer.Cadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cadd9", 0, attributes)
        .addMute("LowE")
        .addOpenString(["G"])
        .addFretPress(3, ["A", "H", "HighE"])
        .addFretPress(2, "D");
}

/* Mol chords */

Chordizer.Cm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cm", 3, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["G", "D"])
        .addFretPress(2, "H");
}

/* # chords */


Chordizer.Cis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#", 4, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["D", "G", "H"]);
}

Chordizer.Cism = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#m", 4, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["G", "D"])
        .addFretPress(2, "H");
}
