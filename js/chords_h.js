
function addChordH(parentElemId, attributes) {
    addChord(parentElemId, "H", 2, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 3, ["D", "G", "H"]);
    }, attributes);
}

/* Mol chords */

function addChordHm(parentElemId, attributes) {
    addChord(parentElemId, "Hm", 2, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 2, "H");
        addFretPress(b, 3, ["D", "G"]);
    }, attributes);
}

function addChordHm7(parentElemId, attributes) {
    addChord(parentElemId, "Hm7", 2, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 2, "H");
        addFretPress(b, 3, ["D"]);
    }, attributes);
}

/* # chords */
