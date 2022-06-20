
function addChordG(parentElemId, attributes) {
    addChord(parentElemId, "G", 0, function(b) {
        addOpenString(b, ["G", "D"]);
        addFretPress(b, 3, ["LowE", "H", "HighE"]);
        addFretPress(b, 2, "A");
    }, attributes);
}

function addChordGv2(parentElemId, attributes) {
    addChord(parentElemId, "G", 0, function(b) {
        addOpenString(b, ["G", "D", "H"]);
        addFretPress(b, 3, ["LowE", "HighE"]);
        addFretPress(b, 2, "A");
    }, attributes);
}

function addChordG_H(parentElemId, attributes) {
    addChord(parentElemId, "G/H", 0, function(b) {
        addMute(b, ["LowE", "HighE"]);
        addOpenString(b, ["G", "D", "H"]);
        addFretPress(b, 2, "A");
    }, attributes);
}

/* Mol chords */

function addChordGm(parentElemId, attributes) {
    addChord(parentElemId, "Gm", 3, function(b) {
        addBarre(b, 1, "LowE", "HighE");
        addFretPress(b, 3, ["A", "D"]);
    }, attributes);
}

/* # chords */

function addChordGis(parentElemId, attributes) {
    addChord(parentElemId, "G#", 4, function(b) {
        addBarre(b, 1, "LowE", "HighE");
        addFretPress(b, 2, "G");
        addFretPress(b, 3, ["A", "D"]);
    }, attributes);
}
