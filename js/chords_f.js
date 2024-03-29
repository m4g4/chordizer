Chordizer.F = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F", 1, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A", "D"]);
};

Chordizer.Fm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fm", 1, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D"]);
};

Chordizer.F6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F6", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addFretPress(1, ["H", "HighE"])
        .addFretPress(2, ["G"]);
};

Chordizer.F7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F7", 1, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, ["D"])
        .addFretPress(3, ["A", "D"]);
};

Chordizer.F9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F9", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["G"])
        .addFretPress(3, ["D", "HighE"])
        .addFretPress(4, ["H"]);
};

Chordizer.Fm6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fm6", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addFretPress(1, ["G", "H", "HighE"]);
};

Chordizer.Fm7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fm7", 1, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D"]);
};

Chordizer.Fmaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fmaj7", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["HighE"])
        .addFretPress(1, ["H"])
        .addFretPress(2, ["G"])
        .addFretPress(3, ["D"]);
};

Chordizer.Fdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fdim", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D", "H"])
        .addFretPress(1, ["G", "HighE"]);
};

Chordizer.Fdim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fdim7", 0, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["G", "H", "HighE"]);
};

Chordizer.Faug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F+", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["HighE"])
        .addFretPress(2, ["H", "G"])
        .addFretPress(3, ["D"]);
};

Chordizer.Fsus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fsus2", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["G"])
        .addFretPress(1, ["H", "HighE"])
        .addFretPress(3, ["D"]);
};

Chordizer.Fsus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fsus4", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["HighE", "H"])
        .addFretPress(3, ["D", "G"]);
};

Chordizer.Fsus = Chordizer.Fsus4;

Chordizer.Fadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Fadd9", 5, attributes)
        .addMute(["LowE"])
        .addOpenString(["D"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["A", "H"])
        .addBarre(1, "G", "HighE");
};

/* # chords */

Chordizer.Fis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#", 2, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A", "D"]);
};

/* Mol chords */

Chordizer.Fism = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#m", 2, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D"]);
};

Chordizer.Fis6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#6", 0, attributes)
        .addMute(["LowE", "HighE"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["D", "A", "H"]);
};

Chordizer.Fis7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#7", 2, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A"]);
};

Chordizer.Fis9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#9", 3, attributes)
        .addMute(["LowE"])
        .addOpenString(["HighE", "A"])
        .addFretPress(1, ["G"])
        .addFretPress(2, ["D", "HighE"])
        .addFretPress(3, ["H"]);
};

Chordizer.Fism6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#m6", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D"])
        .addFretPress(2, ["G", "H", "HighE"]);
};

Chordizer.Fism7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#m7", 2, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A"]);
};

Chordizer.Fismaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#maj7", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["HighE"])
        .addFretPress(2, ["H"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["D"]);
};

Chordizer.Fisdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#dim", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D", "H"])
        .addFretPress(2, ["G", "HighE"]);
};

Chordizer.Fisdim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#dim7", 4, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(1, ["D"])
        .addFretPress(2, ["G", "H", "HighE"]);
};

Chordizer.Fisaug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#+", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(2, ["HighE"])
        .addFretPress(3, ["H", "G"])
        .addFretPress(4, ["D"]);
};

Chordizer.Fissus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#sus2", 0, attributes)
        .addMute(["D", "A"])
        .addFretPress(1, ["G"])
        .addFretPress(2, ["HighE", "H", "LowE"]);
};

Chordizer.Fissus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#sus4", 2, attributes)
        .addFretPress(3, ["A", "D", "G"])
        .addBarre(1, "LowE", "HighE");
};

Chordizer.Fissus = Chordizer.Fissus4;

Chordizer.Fisadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "F#add9", 6, attributes)
        .addMute(["LowE"])
        .addOpenString(["D"])
        .addFretPress(3, ["D"])
        .addFretPress(4, ["A", "H"])
        .addBarre(1, "G", "HighE");
};
