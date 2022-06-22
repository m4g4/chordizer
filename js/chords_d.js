Chordizer.D = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString("D")
        .addFretPress(2, ["G", "HighE"])
        .addFretPress(3, "H");
}

Chordizer.D_Fis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D/F#", 0, attributes)
        .addMute(["A"])
        .addOpenString("D")
        .addFretPress(2, ["LowE", "G", "HighE"])
        .addFretPress(3, "H");
}

Chordizer.Dsus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dsus2", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D", "HighE"])
        .addFretPress(2, "G")
        .addFretPress(3, ["H"]);
}

Chordizer.Dsus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dsus4", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString("D")
        .addFretPress(2, "G")
        .addFretPress(3, ["H", "HighE"]);
}

/* Mol chords */

Chordizer.Dm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dm", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString("D")
        .addFretPress(1, "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, "H");
}

/* # chords */
