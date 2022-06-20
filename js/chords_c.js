
function addChordC(parentElemId, attributes) {
    addChord(parentElemId, "C", 0, function(b) {
        addMute(b, "LowE");
        addOpenString(b, ["G", "HighE"]);
        addFretPress(b, 3, "A");
        addFretPress(b, 2, "D");
        addFretPress(b, 1, "H");
    }, attributes);
}

function addChordCv2(parentElemId, attributes) {
    addChord(parentElemId, "C", 5, function(b) {
        addBarre(b, 1, "D", "H");
        addFretPress(b, 4, ["LowE", "HighE"]);
        addFretPress(b, 3, "A");
    }, attributes);
}

function addChordCv3(parentElemId, attributes) {
    addChord(parentElemId, "C", 3, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 3, ["G", "D", "H"]);
    }, attributes);
}

function addChordCv4(parentElemId, attributes) {
    addChord(parentElemId, "C", 8, function(b) {
        addBarre(b, 1, "LowE", "HighE");
        addFretPress(b, 2, "G");
        addFretPress(b, 3, ["A", "D"]);
    }, attributes);
}

function addChordCv5(parentElemId, attributes) {
    addChord(parentElemId, "C", 10, function(b) {
        addMute(b, ["LowE", "A"]);
        addFretPress(b, 1, "D");
        addFretPress(b, 3, ["G", "HighE"]);
        addFretPress(b, 4, "H");
    }, attributes);
}

function addChordCmaj7(parentElemId, attributes) {
    addChord(parentElemId, "Cmaj7", 0, function(b) {
        addMute(b, "LowE");
        addOpenString(b, ["G", "H", "HighE"]);
        addFretPress(b, 3, "A");
        addFretPress(b, 2, "D");
    }, attributes);
}

function addChordCadd9(parentElemId, attributes) {
    addChord(parentElemId, "Cadd9", 0, function(b) {
        addMute(b, "LowE");
        addOpenString(b, ["G"]);
        addFretPress(b, 3, ["A", "H", "HighE"]);
        addFretPress(b, 2, "D");
    }, attributes);
}

/* Mol chords */

function addChordCm(parentElemId, attributes) {
    addChord(parentElemId, "Cm", 3, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 3, ["G", "D"]);
        addFretPress(b, 2, "H");
    }, attributes);
}

/* # chords */


function addChordCis(parentElemId, attributes) {
    addChord(parentElemId, "C#", 4, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 3, ["D", "G", "H"]);
    }, attributes);
}

function addChordCism(parentElemId, attributes) {
    addChord(parentElemId, "C#m", 4, function(b) {
        addMute(b, "LowE");
        addBarre(b, 1, "A", "HighE");
        addFretPress(b, 3, ["G", "D"]);
        addFretPress(b, 2, "H");
    }, attributes);
}
