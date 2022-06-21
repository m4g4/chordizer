
Chordizer.E = function (parentElemId, attributes) {
    this.addChord(parentElemId, "E", 0, attributes)
        .addOpenString(["LowE", "H", "HighE"])
        .addFretPress(1, "G")
        .addFretPress(2, ["A", "D"]);
}

Chordizer.Ev2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "E", 0, Object.assign({'hasFiveFrets':true}, attributes))
        .addOpenString(["LowE"])
        .addBarre(2, "A", "D")
        .addFretPress(4, ["G", "HighE"])
        .addFretPress(5, "H");
}

/* Mol chords */

Chordizer.Em = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Em", 0, attributes)
        .addOpenString(["LowE", "G", "H", "HighE"])
        .addFretPress(2, ["A", "D"]);
}

Chordizer.Em7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Em7", 0, attributes)
        .addOpenString(["LowE", "G", "D", "H", "HighE"])
        .addFretPress(2, ["A"]);
}

Chordizer.Em7v2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Em7", 0, attributes)
        .addOpenString(["LowE", "G", "HighE"])
        .addFretPress(2, ["A", "D"])
        .addFretPress(3, ["H"]);
}

/* E# chords */
