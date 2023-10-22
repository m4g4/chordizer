Chordizer.D = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString("D")
        .addFretPress(2, ["G", "HighE"])
        .addFretPress(3, "H");
};

Chordizer.D_Fis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D/F#", 0, attributes)
        .addMute(["A"])
        .addOpenString("D")
        .addFretPress(2, ["LowE", "G", "HighE"])
        .addFretPress(3, "H");
};

Chordizer.Dm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dm", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString("D")
        .addFretPress(1, "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, "H");
};

Chordizer.D6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D6", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D", "H"])
        .addFretPress(2, ["G", "HighE"]);
};

Chordizer.D7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D7", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addFretPress(1, ["H"])
        .addFretPress(2, ["G", "HighE"]);
};

Chordizer.D9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D9", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D", "HighE"])
        .addFretPress(1, ["H"])
        .addFretPress(2, ["G"]);
};

Chordizer.Dm6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dm6", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D", "H"])
        .addFretPress(1, ["HighE"])
        .addFretPress(2, ["G"]);
};

Chordizer.Dm7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dm7", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addFretPress(1, ["HighE", "H"])
        .addFretPress(2, ["G"]);
};

Chordizer.Dmaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dmaj7", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addFretPress(2, ["G", "HighE", "H"]);
};

Chordizer.Ddim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Ddim", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D", "H"])
        .addFretPress(1, ["G", "HighE"]);
};

Chordizer.Ddim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Ddim7", 0, attributes)
        .addMute(["A", "LowE"])
        .addOpenString(["D"])
        .addFretPress(1, ["G", "H", "HighE"]);
};

Chordizer.Daug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D+", 0, attributes)
        .addMute(["LowE", "A", "H"])
        .addOpenString(["D"])
        .addFretPress(2, ["HighE"])
        .addFretPress(3, ["G", "H"]);
};

Chordizer.Dsus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dsus2", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D", "HighE"])
        .addFretPress(2, "G")
        .addFretPress(3, ["H"]);
};

Chordizer.Dsus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dsus4", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString("D")
        .addFretPress(2, "G")
        .addFretPress(3, ["H", "HighE"]);
};

Chordizer.Dsus = Chordizer.Dsus4;

Chordizer.Dadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Dadd9", 2, attributes)
        .addMute(["LowE"])
        .addOpenString(["D"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["A", "H"])
        .addBarre(1, "G", "HighE");
};

/* # chords */

Chordizer.Dis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#", 6, attributes)
        .addMute("LowE")
        .addBarre(1, "A", "HighE")
        .addFretPress(3, ["D", "G", "H"]);
};

Chordizer.Dism = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#m", 6, attributes)
        .addMute(["LowE"])
        .addFretPress(2, ["H"])
        .addFretPress(3, ["D", "G"])
        .addBarre(1, "A", "HighE");
};

Chordizer.Dis6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#6", 0, attributes)
        .addMute(["LowE"])
        .addOpenString(["A"])
        .addFretPress(3, ["G", "HighE"])
        .addBarre(1, "D", "HighE");
};

Chordizer.Dis7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#7", 0, attributes)
        .addMute(["LowE"])
        .addOpenString(["A"])
        .addFretPress(1, ["D"])
        .addFretPress(2, ["H"])
        .addFretPress(3, ["G", "HighE"]);
};

Chordizer.Dis9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#9", 0, attributes)
        .addFretPress(2, ["H"])
        .addFretPress(3, ["G"])
        .addBarre(1, "LowE", "HighE");
};

Chordizer.Dism6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#m6", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["HighE"])
        .addFretPress(3, ["G"])
        .addBarre(1, "D", "HighE");
};

Chordizer.Dism7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#m7", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D"])
        .addFretPress(2, ["HighE", "H"])
        .addFretPress(3, ["G"]);
};

Chordizer.Dismaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#maj7", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D"])
        .addFretPress(3, ["G", "H", "HighE"]);
};

Chordizer.Disdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#dim", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D", "H"])
        .addFretPress(2, ["G", "HighE"]);
};

Chordizer.Disdim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#dim7", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(1, ["D"])
        .addFretPress(2, ["G", "H", "HighE"]);
};

Chordizer.Disaug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#+", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["G", "H"])
        .addFretPress(1, ["D"])
        .addFretPress(3, ["HighE"]);
};

Chordizer.Dissus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#sus2", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["H"])
        .addBarre(1, "D", "HighE");
};

Chordizer.Dissus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#sus4", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["H", "HighE"]);
};

Chordizer.Dissus = Chordizer.Dissus4;

Chordizer.Disadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "D#add9", 3, attributes)
        .addMute(["LowE"])
        .addOpenString(["D"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["A", "H"])
        .addBarre(1, "G", "HighE");
};
