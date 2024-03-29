Chordizer.A = function (parentElemId, attributes) {
    this.addChord(parentElemId, "A", 0, attributes)
        .addMute("LowE")
        .addOpenString(["A", "HighE"])
        .addFretPress(2, ["D", "G", "H"]);
};

Chordizer.Am = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Am", 0, attributes)
        .addMute("LowE")
        .addOpenString(["A", "HighE"])
        .addFretPress(1, "H")
        .addFretPress(2, ["D", "G"]);
};

Chordizer.Am_G = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Am/G", 0, attributes)
        .addMute("A")
        .addOpenString(["G", "HighE"])
        .addFretPress(1, "H")
        .addFretPress(2, ["D"])
        .addFretPress(3, "LowE");
};

Chordizer.A6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "A6", 0, attributes)
        .addMute("LowE")
        .addOpenString("A")
        .addFretPress(2, ["D", "G", "H", "HighE"]);
};

Chordizer.A7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "A7", 0, attributes)
        .addMute("LowE")
        .addOpenString("A")
        .addFretPress(2, ["D", "G", "H"])
        .addFretPress(3, "HighE");
};

Chordizer.A9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "A9", 0, attributes)
        .addMute("LowE")
        .addOpenString("A")
        .addFretPress(2, ["D", "H"])
        .addFretPress(3, "HighE")
        .addFretPress(4, ["G"]);
};

Chordizer.Am6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Am6", 0, attributes)
        .addMute("LowE")
        .addOpenString("A")
        .addFretPress(1, ["H"])
        .addFretPress(2, ["D", "G", "HighE"]);
};

Chordizer.Am7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Am7", 0, attributes)
        .addMute("LowE")
        .addOpenString(["A", "G", "HighE"])
        .addFretPress(2, "D")
        .addFretPress(1, ["H"]);
};

Chordizer.Amaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Amaj7", 0, attributes)
        .addMute("LowE")
        .addOpenString(["A", "HighE"])
        .addFretPress(1, "G")
        .addFretPress(2, ["D", "H"]);
};

Chordizer.Adim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Adim", 0, attributes)
        .addMute("LowE")
        .addOpenString("A")
        .addFretPress(1, ["D", "H"])
        .addFretPress(2, ["G", "HighE"]);
};

Chordizer.Adim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Adim7", 0, attributes)
        .addMute(["LowE", "HighE"])
        .addOpenString(["A", "G"])
        .addFretPress(1, ["D", "H"]);
};

Chordizer.Aaug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Aaug", 0, attributes)
        .addMute("HighE")
        .addOpenString("A")
        .addFretPress(1, "HighE")
        .addFretPress(2, ["G", "H"])
        .addFretPress(3, "D");
};

Chordizer.Asus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Asus2", 0, attributes)
        .addMute(["LowE"])
        .addOpenString(["A", "H", "HighE"])
        .addFretPress(2, ["D", "G"]);
};

Chordizer.Asus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Asus4", 0, attributes)
        .addOpenString(["A", "HighE"])
        .addFretPress(2, ["D", "G"])
        .addFretPress(3, "H");
};

Chordizer.Asus = Chordizer.Asus4;

Chordizer.Aadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Aadd9", 0, attributes)
        .addMute(["LowE"])
        .addOpenString(["A", "HighE"])
        .addFretPress(2, ["D", "H"])
        .addFretPress(4, ["G"]);
};

/* # chords */

Chordizer.B = function (parentElemId, attributes) {
    this.addChord(parentElemId, "B", 1, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["D", "G", "H"]);
};

Chordizer.Bm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bm", 1, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(2, "H")
        .addFretPress(3, ["D", "G"]);
};

Chordizer.B6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "B6", 1, attributes)
        .addBarre(1, "LowE", "A")
        .addBarre(3, "D", "HighE");
};

Chordizer.B7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "B7", 3, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D", "G", "H"])
        .addFretPress(2, ["HighE"]);
};

Chordizer.B9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "B9", 3, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(3, ["D"])
        .addBarre(1, "LowE", "HighE");
};

Chordizer.Bm6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bm6", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(2, ["H"])
        .addFretPress(3, ["D", "G", "HighE"]);
};

Chordizer.Bm7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bm7", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(2, ["H"])
        .addFretPress(3, ["D", "G"])
        .addFretPress(4, ["HighE"]);
};

Chordizer.Bmaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bmaj7", 0, attributes)
        .addMute(["LowE"])
        .addFretPress(2, ["G"])
        .addFretPress(3, ["D", "H"])
        .addBarre(1, "A", "HighE");
};

Chordizer.Bdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bdim", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["D", "H"])
        .addFretPress(3, ["G", "HighE"]);
};

Chordizer.Bdim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bdim7", 0, attributes)
        .addMute(["HighE", "LowE"])
        .addFretPress(1, ["A", "G"])
        .addFretPress(2, ["D", "H"]);
};

Chordizer.Baug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "B+", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addFretPress(2, ["HighE"])
        .addFretPress(3, ["G", "H"]);
};

Chordizer.Bsus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bsus2", 0, attributes)
        .addMute(["LowE"])
        .addFretPress(3, ["D", "G"])
        .addBarre(1, "A", "HighE");
};

Chordizer.Bsus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Bsus", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["HighE"])
        .addFretPress(3, ["D", "G"])
        .addFretPress(4, ["H"]);
};

Chordizer.Bsus = Chordizer.Bsus4;

Chordizer.Badd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Badd9", 3, attributes)
        .addMute(["A", "HighE"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["LowE"])
        .addBarre(1, "D", "H");
};
