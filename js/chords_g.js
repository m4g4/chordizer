Chordizer.G = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G", 0, attributes)
        .addOpenString(["G", "D"])
        .addFretPress(3, ["LowE", "H", "HighE"])
        .addFretPress(2, "A");
};

Chordizer.Gv2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G", 0, attributes)
        .addOpenString(["G", "D", "H"])
        .addFretPress(3, ["LowE", "HighE"])
        .addFretPress(2, "A");
};

Chordizer.G_H = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G/H", 0, attributes)
        .addMute(["LowE", "HighE"])
        .addOpenString(["G", "D", "H"])
        .addFretPress(2, "A");
};

Chordizer.Gm = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gm", 3, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D"]);
};

Chordizer.G6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G6", 0, attributes)
        .addOpenString(["D", "G", "H", "HighE"])
        .addFretPress(2, ["A"])
        .addFretPress(3, ["LowE"]);
};

Chordizer.G7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G7", 0, attributes)
        .addOpenString(["D", "G", "H"])
        .addFretPress(1, ["HighE"])
        .addFretPress(2, ["A"])
        .addFretPress(3, ["LowE"]);
};

Chordizer.G9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G9", 0, attributes)
        .addOpenString(["D", "H", "A"])
        .addFretPress(1, ["HighE"])
        .addFretPress(2, ["G"])
        .addFretPress(3, ["LowE"]);
};

Chordizer.Gm6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gm6", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addFretPress(2, ["D"])
        .addFretPress(3, ["G", "H", "HighE"]);
};

Chordizer.Gm7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gm7", 3, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A"]);
};

Chordizer.Gmaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gmaj7", 3, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, ["D", "G"])
        .addFretPress(3, ["A"]);
};

Chordizer.Gdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gdim", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addFretPress(2, ["D", "H"])
        .addFretPress(3, ["G", "HighE"]);
};

Chordizer.Gdim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gdim7", 5, attributes)
        .addMute(["A", "LowE"])
        .addFretPress(1, ["D"])
        .addFretPress(2, ["G", "H", "HighE"]);
};

Chordizer.Gaug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gaug", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["G", "H"])
        .addFretPress(1, ["D"])
        .addFretPress(3, ["HighE"]);
};

Chordizer.Gsus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gsus2", 0, attributes)
        .addMute(["A"])
        .addOpenString(["D"])
        .addFretPress(2, ["G"])
        .addFretPress(3, ["H", "HighE", "LowE"]);
};

Chordizer.Gsus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gsus4", 3, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D", "G"]);
};

Chordizer.Gsus = Chordizer.Gsus4;

Chordizer.Gadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "Gadd9", 3, attributes)
        .addMute(["A"])
        .addFretPress(2, ["G"])
        .addFretPress(3, ["D", "HighE"])
        .addBarre(1, "LowE", "HighE");
};

/* # chords */

Chordizer.Gis = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#", 4, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(2, "G")
        .addFretPress(3, ["A", "D"]);
};

Chordizer.Gism = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#m", 4, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, ["A", "D"]);
};

Chordizer.Gis6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#6", 0, attributes)
        .addBarre(1, "LowE", "HighE")
        .addFretPress(3, "A")
        .addFretPress(4, "LowE");
};

Chordizer.Gis7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#7", 0, attributes)
        .addMute(["LowE", "A"])
        .addBarre(1, "D", "HighE")
        .addFretPress(2, "HighE");
};

Chordizer.Gis9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#9", 0, attributes)
        .addMute(["LowE", "A"])
        .addFretPress(1, ["D", "H"])
        .addFretPress(2, "HighE")
        .addFretPress(3, "G");
};

Chordizer.Gism6 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#m6", 0, attributes)
        .addMute(["LowE", "A", "D"])
        .addBarre(4, "G", "HighE");
};

Chordizer.Gism7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#m7", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString("H")
        .addFretPress(1, ["D", "G"])
        .addFretPress(2, "HighE");
};

Chordizer.Gismaj7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#maj7", 0, attributes)
        .addMute(["LowE", "A"])
        .addBarre(1, "D", "HighE")
        .addFretPress(3, "HighE");
};

Chordizer.Gisdim = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#dim", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D", "H"])
        .addFretPress(1, ["G", "HighE"]);
};

Chordizer.Gisdim7 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#dim7", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString(["D"])
        .addBarre(1, "G", "HighE");
};

Chordizer.Gisaug = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#aug", 0, attributes)
        .addMute(["LowE", "A"])
        .addOpenString("HighE")
        .addFretPress(1, ["G", "H"])
        .addFretPress(2, "D");
};

Chordizer.Gissus2 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#sus2", 3, attributes)
        .addMute(["A", "D"])
        .addFretPress(3, ["G"])
        .addFretPress(4, ["LowE", "H", "HighE"]);
};

Chordizer.Gissus4 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#sus4", 0, attributes)
        .addMute(["LowE", "A"])
        .addBarre(1, "D", "HighE")
        .addFretPress(2, "H")
        .addFretPress(4, "HighE");
};

Chordizer.Gissus = Chordizer.Gissus4;

Chordizer.Gisadd9 = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#add9", 4, attributes)
        .addMute(["A"])
        .addFretPress(2, ["G"])
        .addFretPress(3, ["D", "HighE"])
        .addBarre(1, "LowE", "HighE");
};

Chordizer.Gis_C = function (parentElemId, attributes) {
    this.addChord(parentElemId, "G#/C", 3, attributes)
        .addMute(["LowE", "HighE"])
        .addFretPress(1, "A")
        .addFretPress(4, "D")
        .addFretPress(3, "G")
        .addFretPress(2, "H");
};
