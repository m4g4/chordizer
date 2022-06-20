
function addChordE(parentElemId, attributes) {
    addChord(parentElemId, "E", 0, function(b) {
        addOpenString(b, ["LowE", "H", "HighE"]);
        addFretPress(b, 1, "G");
        addFretPress(b, 2, ["A", "D"]);
    }, attributes);
}

function addChordEv2(parentElemId, attributes) {
    addChord(parentElemId, "E", 0, function(b) {
        addOpenString(b, ["LowE"]);
        addBarre(b, 2, "A", "D");
        addFretPress(b, 4, ["G", "HighE"]);
        addFretPress(b, 5, "H");
    }, Object.assign({'hasFiveFrets':true}, attributes));
}

/* Mol chords */

function addChordEm(parentElemId, attributes) {
    addChord(parentElemId, "Em", 0, function(b) {
        addOpenString(b, ["LowE", "G", "H", "HighE"]);
        addFretPress(b, 2, ["A", "D"]);
    }, attributes);
}

function addChordEm7(parentElemId, attributes) {
    addChord(parentElemId, "Em7", 0, function(b) {
        addOpenString(b, ["LowE", "G", "D", "H", "HighE"]);
        addFretPress(b, 2, ["A"]);
    }, attributes);
}

function addChordEm7v2(parentElemId, attributes) {
    addChord(parentElemId, "Em7", 0, function(b) {
        addOpenString(b, ["LowE", "G", "HighE"]);
        addFretPress(b, 2, ["A", "D"]);
        addFretPress(b, 3, ["H"]);
    }, attributes);
}

/* E# chords */
