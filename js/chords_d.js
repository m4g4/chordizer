
function addChordD(parentElemId, attributes) {
    addChord(parentElemId, "D", 0, function(b) {
        addMute(b, ["LowE", "A"]);
        addOpenString(b, "D");
        addFretPress(b, 2, ["G", "HighE"]);
        addFretPress(b, 3, "H");
    }, attributes);
}

function addChordD_Fis(parentElemId, attributes) {
    addChord(parentElemId, "D/F#", 0, function(b) {
        addMute(b, ["A"]);
        addOpenString(b, "D");
        addFretPress(b, 2, ["LowE", "G", "HighE"]);
        addFretPress(b, 3, "H");
    }, attributes);
}

function addChordDsus2(parentElemId, attributes) {
    addChord(parentElemId, "Dsus2", 0, function(b) {
        addMute(b, ["LowE", "A"]);
        addOpenString(b, ["D", "HighE"]);
        addFretPress(b, 2, "G");
        addFretPress(b, 3, ["H"]);
    }, attributes);
}

function addChordDsus4(parentElemId, attributes) {
    addChord(parentElemId, "Dsus4", 0, function(b) {
        addMute(b, ["LowE", "A"]);
        addOpenString(b, "D");
        addFretPress(b, 2, "G");
        addFretPress(b, 3, ["H", "HighE"]);
    }, attributes);
}

/* Mol chords */

function addChordDm(parentElemId, attributes) {
    addChord(parentElemId, "Dm", 3, function(b) {
        addMute(b, ["LowE", "A"]);
        addOpenString(b, "D");
        addFretPress(b, 1, "HighE");
        addFretPress(b, 2, "G");
        addFretPress(b, 3, "H");
    }, attributes);
}

/* # chords */
