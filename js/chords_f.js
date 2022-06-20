
function addChordF(parentElemId, attributes) {
    addChord(parentElemId, "F", 1, function(b) {
        addBarre(b, 1, "LowE", "HighE");
        addFretPress(b, 2, "G");
        addFretPress(b, 3, ["A", "D"]);
    }, attributes);
}

/* Mol chords */

function addChordFm(parentElemId, attributes) {
    addChord(parentElemId, "Fm", 1, function(b) {
        addBarre(b, 1, "LowE", "HighE");
        addFretPress(b, 3, ["A", "D"]);
    }, attributes);
}


/* # chords */

function addChordFis(parentElemId, attributes) {
    addChord(parentElemId, "F#", 2, function(b) {
        addBarre(b, 1, "LowE", "HighE");
        addFretPress(b, 2, "G");
        addFretPress(b, 3, ["A", "D"]);
    }, attributes);
}

/* Mol chords */

function addChordFism(parentElemId, attributes) {
    addChord(parentElemId, "F#m", 2, function(b) {
        addBarre(b, 1, "LowE", "HighE");
        addFretPress(b, 3, ["A", "D"]);
    }, attributes);
}
