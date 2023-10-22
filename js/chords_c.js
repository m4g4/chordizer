Chordizer.C = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 0, attributes)
        .addMute("LowE")
        .addOpenString(["G", "HighE"])
        .addFretPress(3, "A")
        .addFretPress(2, "D")
        .addFretPress(1, "H");
};

Chordizer.Cv2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 5, attributes)
        .addBarre(1, "D", "H")
        .addFretPress(4, ["LowE", "HighE"])
        .addFretPress(3, "A");
};

Chordizer.Cv3 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 3, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["G", "D", "H"]);
};

Chordizer.Cv4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 8, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A", "D"]);
};

Chordizer.Cv5 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C", 10, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, "D")
        .addFretPress(3, ["G", "HighE"])
        .addFretPress(4, "H");
};

Chordizer.Cm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cm", 3, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["G", "D"])
        .addFretPress(2, "H");
};

Chordizer.C6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C6", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(1, ["H"])
        .addFretPress(2, ["D", "G"])
        .addFretPress(3, ["HighE"]);
};

Chordizer.C7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C7", 0, attributes)
        .addMute(["LowE"])
        .addOpenString(["HighE"])
        .addFretPress(1, ["H"])
        .addFretPress(2, ["D"])
        .addFretPress(3, ["A", "G"]);
};

Chordizer.C9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C9", 0, attributes)
        .addMute(["LowE"])
        .addFretPress(2, ["D"])
        .addFretPress(3, ["A"])
        .addBarre(3, "G", "HighE");
};

Chordizer.Cm6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cm6", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(1, ["D", "H"])
        .addFretPress(2, ["G"])
        .addFretPress(3, ["HighE"]);
};

Chordizer.Cm7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cm7", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["D", "H"])
        .addFretPress(4, ["G", "HighE"]);
};

Chordizer.Cmaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cmaj7", 0, attributes)
        .addMute("LowE")
        .addOpenString(["G", "H", "HighE"])
        .addFretPress(3, "A")
        .addFretPress(2, "D");
};

Chordizer.Cdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cdim", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D", "H"])
        .addFretPress(2, ["G", "HighE"]);
};

Chordizer.Cdim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cdim7", 2, attributes)
        .addMute(["LowE"])
        .addFretPress(2, ["A"])
        .addFretPress(3, ["D", "H"])
        .addBarre(1, "G", "HighE");
};

Chordizer.Caug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C+", 0, attributes)
        .addMute(["A", "LowE"])
        .addOpenString(["HighE"])
        .addFretPress(1, ["H", "G"])
        .addFretPress(2, ["D"]);
};

Chordizer.Csus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Csus2", 3, attributes)
        .addMute(["LowE"])
        .addFretPress(3, ["D", "G"])
        .addBarre(1, "A", "HighE");
};

Chordizer.Csus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Csus", 0, attributes)
        .addMute(["A", "LowE"])
        .addOpenString(["HighE", "G"])
        .addFretPress(1, ["H"])
        .addFretPress(3, ["HighE", "D"]);
};

Chordizer.Csus = Chordizer.Csus4;

Chordizer.Cadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cadd9", 0, attributes)
        .addMute("LowE")
        .addOpenString(["G"])
        .addFretPress(3, ["A", "H", "HighE"])
        .addFretPress(2, "D");
};

/* # chords */

Chordizer.Cis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#", 4, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["D", "G", "H"]);
};

Chordizer.Cism = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#m", 4, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["G", "D"])
        .addFretPress(2, "H");
};

Chordizer.Cis6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#6", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["H"])
        .addFretPress(3, ["D", "G"])
        .addFretPress(4, ["HighE"]);
};

Chordizer.Cis7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#7", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["H"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["HighE", "G"]);
};

Chordizer.Cis9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#9", 0, attributes)
        .addOpenString(["LowE"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["A"])
        .addBarre(4, "G", "HighE");
};

Chordizer.Cism6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#m6", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["D", "H"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["HighE"]);
};

Chordizer.Cism7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#m7", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["D", "H"])
        .addFretPress(4, ["HighE", "G"]);
};

Chordizer.Cismaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#maj7", 0, attributes)
        .addMute(["LowE"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["A"])
        .addBarre(1, "G", "HighE");
};

Chordizer.Cisdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#dim", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["D", "H"])
        .addFretPress(3, ["G", "HighE"]);
};

Chordizer.Cisdim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#dim7", 3, attributes)
        .addMute(["LowE"])
        .addFretPress(2, ["A"])
        .addFretPress(3, ["D", "H"])
        .addBarre(1, "G", "HighE");
};

Chordizer.Cissus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#sus2", 4, attributes)
        .addMute(["LowE"])
        .addFretPress(3, ["D", "G"])
        .addBarre(1, "A", "HighE");
};

Chordizer.Cisaug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#+", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["HighE"])
        .addFretPress(2, ["H", "G"])
        .addFretPress(3, ["D"]);
};

Chordizer.Cissus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "C#sus", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["HighE"])
        .addFretPress(3, ["D", "G"])
        .addFretPress(4, ["H"]);
};

Chordizer.Cissus = Chordizer.Cissus4;

Chordizer.Cisadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Cisadd9", 6, attributes)
        .addMute(["A", "HighE"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["LowE"])
        .addBarre(1, "D", "H");
};
