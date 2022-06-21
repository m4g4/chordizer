
Chordizer.G = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G", 0, attributes)
        .addOpenString(["G", "D"])
        .addFretPress(3, ["LowE", "H", "HighE"])
        .addFretPress(2, "A");
}

Chordizer.Gv2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G", 0, attributes)
        .addOpenString(["G", "D", "H"])
        .addFretPress(3, ["LowE", "HighE"])
        .addFretPress(2, "A");
}

Chordizer.G_H = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G/H", 0, attributes)
        .addMute(["LowE", "HighE"])
        .addOpenString(["G", "D", "H"])
        .addFretPress(2, "A");
}

/* Mol chords */

Chordizer.Gm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gm", 3, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D"]);
}

/* # chords */

Chordizer.Gis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#", 4, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A", "D"]);
}
