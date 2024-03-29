Chordizer.E = function (parentElemId, attributes) {
    this.addChord(parentElemId, "E", 0, attributes)
        .addOpenString(["LowE", "H", "HighE"])
        .addFretPress(1, "G")
        .addFretPress(2, ["A", "D"]);
};

Chordizer.Ev2 = function (parentElemId, attributes) {
    this.addChord(
        parentElemId,
        "E",
        0,
        Object.assign({ hasFiveFrets: true }, attributes)
    )
        .addOpenString(["LowE"])
        .addBarre(2, "A", "D")
        .addFretPress(4, ["G", "HighE"])
        .addFretPress(5, "H");
};

Chordizer.Em = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Em", 0, attributes)
        .addOpenString(["LowE", "G", "H", "HighE"])
        .addFretPress(2, ["A", "D"]);
};

Chordizer.E6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "E6", 0, attributes)
        .addOpenString(["LowE", "HighE"])
        .addFretPress(1, ["G"])
        .addFretPress(2, ["H", "D", "A"]);
};

Chordizer.E7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "E7", 0, attributes)
        .addOpenString(["LowE", "HighE"])
        .addFretPress(1, ["G"])
        .addFretPress(2, ["D", "A"])
        .addFretPress(3, ["H"]);
};

Chordizer.E9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "E9", 0, attributes)
        .addOpenString(["LowE", "D", "H"])
        .addFretPress(1, ["G"])
        .addFretPress(2, ["A", "HighE"]);
};

Chordizer.Em6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Em6", 0, attributes)
        .addOpenString(["LowE", "HighE", "G"])
        .addFretPress(2, ["A", "D", "H"]);
};

Chordizer.Em7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Em7", 0, attributes)
        .addOpenString(["LowE", "G", "D", "H", "HighE"])
        .addFretPress(2, ["A"]);
};

Chordizer.Em7v2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Em7", 0, attributes)
        .addOpenString(["LowE", "G", "HighE"])
        .addFretPress(2, ["A", "D"])
        .addFretPress(3, ["H"]);
};

Chordizer.Emaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Emaj7", 0, attributes)
        .addOpenString(["LowE", "HighE", "H"])
        .addFretPress(1, ["D", "G"])
        .addFretPress(2, ["A"]);
};

Chordizer.Edim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Edim", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["D", "H"])
        .addFretPress(3, ["G", "HighE"]);
};

Chordizer.Edim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Edim7", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(2, ["D"])
        .addFretPress(3, ["G", "H", "HighE"]);
};

Chordizer.Eaug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "E+", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["HighE"])
        .addFretPress(1, ["G", "H"])
        .addFretPress(2, ["D"]);
};

Chordizer.Esus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Esus2", 0, attributes)
        .addOpenString(["LowE", "H", "HighE"])
        .addFretPress(1, ["G"])
        .addFretPress(2, ["A"])
        .addFretPress(4, ["D"]);
};

Chordizer.Esus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Esus4", 0, attributes)
        .addOpenString(["HighE", "H", "LowE"])
        .addFretPress(2, ["D", "A", "G"]);
};

Chordizer.Esus = Chordizer.Esus4;

Chordizer.Eadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Eadd9", 4, attributes)
        .addMute(["LowE"])
        .addOpenString(["D"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["A", "H"])
        .addBarre(1, "G", "HighE");
};
