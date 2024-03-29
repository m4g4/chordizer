Chordizer.H = function (parentElemId, attributes) {
    this.addChord(parentElemId, "H", 2, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["D", "G", "H"]);
};

Chordizer.Hm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Hm", 2, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(2, "H")
        .addFretPress(3, ["D", "G"]);
};

Chordizer.H6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "H6", 1, attributes)
        .addBarre(2, "LowE", "A")
        .addBarre(4, "D", "HighE");
};

Chordizer.H7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "H7", 0, attributes)
        .addMute(["LowE"])
        .addOpenString(["H"])
        .addFretPress(1, ["D"])
        .addFretPress(2, ["A", "G", "HighE"]);
};

Chordizer.H9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "H9", 0, attributes)
        .addMute(["LowE"])
        .addFretPress(1, ["D"])
        .addFretPress(2, ["A"])
        .addBarre(2, "G", "HighE");
};

Chordizer.Hm6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Hm6", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(3, ["H"])
        .addFretPress(4, ["D", "G", "HighE"]);
};

Chordizer.Hm7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Hm7", 2, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(2, "H")
        .addFretPress(3, ["D"]);
};

Chordizer.Bmaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bmaj7", 0, attributes)
        .addMute(["LowE"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["D", "H"])
        .addBarre(2, "A", "HighE");
};

Chordizer.Bdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bdim", 0, attributes)
        .addMute(["A", "LowE"])
        .addOpenString(["D", "H"])
        .addFretPress(1, ["G", "HighE"]);
};

Chordizer.Baug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "B+", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(1, ["HighE"])
        .addFretPress(2, ["H", "G"])
        .addFretPress(3, ["D"]);
};

Chordizer.Bsus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bsus", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(1, ["HighE"])
        .addFretPress(3, ["D", "G"])
        .addFretPress(4, ["H"]);
};

Chordizer.Bsus = Chordizer.Bsus4;
