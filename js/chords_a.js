
function addChordA(parentElemId, attributes) {
    addChord(parentElemId, "A", 0, function(b) {
        addMute(b, "LowE");
        addOpenString(b, ["A", "HighE"]);
        addFretPress(b, 2, ["D", "G", "H"]);
    }, attributes);
}

/* Mol chords */

function addChordAm(parentElemId, attributes) {
    addChord(parentElemId, "Am", 0, function(b) {
        addMute(b, "LowE");
        addOpenString(b, ["A", "HighE"]);
        addFretPress(b, 1, "H");
        addFretPress(b, 2, ["D", "G"]);
    }, attributes);
}

function addChordAm_G(parentElemId, attributes) {
    addChord(parentElemId, "Am/G", 0, function(b) {
        addMute(b, "A");
        addOpenString(b, ["G", "HighE"]);
        addFretPress(b, 1, "H");
        addFretPress(b, 2, ["D"]);
        addFretPress(b, 3, "LowE");
    }, attributes);
}

function addChordAm7(parentElemId, attributes) {
    addChord(parentElemId, "Am7", 0, function(b) {
        addMute(b, "LowE");
        addOpenString(b, ["A", "G", "HighE"]);
        addFretPress(b, 2, "D");
        addFretPress(b, 1, ["H"]);
    }, attributes);
}

/* # chords */

function addChordB(parentElemId, attributes) {
    addChord(parentElemId, "B", 1, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 3, ["D", "G", "H"]);
    }, attributes);
}

/* Mol chords */

function addChordBm(parentElemId, attributes) {
    addChord(parentElemId, "Bm", 1, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 2, "H");
        addFretPress(b, 3, ["D", "G"]);
    }, attributes);
}
