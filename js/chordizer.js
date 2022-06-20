document.addEventListener('DOMContentLoaded', function() {

    jQuery(".chordizer").each( function( i, el ) {
        var elem = jQuery( el );
        if (typeof elem.attr("custom") !== 'undefined') {
            return;
        }

        if (typeof elem.data("chord") === 'undefined') {
            console.error("Cannot render chord element. Attribute data-chord missing!");
            return;
        }

        var chordName = elem.data("chord")
            .replace('#', 'is')
            .replace('/', '_');

        var attributes = {};

        if (typeof elem.attr("small") !== 'undefined') {
            attributes['small'] = true;
        } else if (typeof elem.attr("large") !== 'undefined') {
            attributes['large'] = true;
        }

        if (typeof elem.data("title") !== 'undefined') {
            attributes['customTitle'] = elem.data("title");
        }

        window["addChord"+chordName](elem, attributes);
    });

});

var stringTones = ["LowE", "A", "D", "G", "H", "HighE"];

function addCustomChord(parentElementId, chordName, fretNumber, chordMarksFunction, attributes) {
    addChord(jQuery("#" + parentElementId), chordName, fretNumber, chordMarksFunction, attributes);
}

function addChord(parentElement, chordName, fretNumber, chordMarksFunction, attributes) {

    if (!attributes)
        attributes = {};

    var chordSymbol = chordName
        .replace('#', 'is')
        .replace('/', '_');

    var extraClass = attributes['hasFiveFrets'] ? " hasFiveFrets" : "";
    var fifthFretRow = attributes['hasFiveFrets'] ?
        "<tr class=\"Fret Fifth\">\
            <td class=\"LowE\"></td>\
            <td class=\"A\"></td>\
            <td class=\"D\"></td>\
            <td class=\"G\"></td>\
            <td class=\"H\"></td>\
            <td class=\"HighE\"></td>\
            </tr>"
        : "";

    extraClass += attributes['small'] ? " small" : "";
    extraClass += attributes['large'] ? " large" : "";

    if (attributes['customTitle']) {
        chordName = attributes['customTitle'];
    }

    parentElement.append(
        "<div class=\"chord " + chordSymbol + extraClass + "\">\
    <table>\
        <tbody><tr class=\"Fret Zero\">\
            <td class=\"LowE\"></div></td>\
            <td class=\"A\"></td>\
            <td class=\"D\"></td>\
            <td class=\"G\"></td>\
            <td class=\"H\"></td>\
            <td class=\"HighE\"></td>\
        </tr>\
        <tr class=\"Fret First\">\
            <td class=\"LowE\"></td>\
            <td class=\"A\"></td>\
            <td class=\"D\"></td>\
            <td class=\"G\"></td>\
            <td class=\"H\"></td>\
            <td class=\"HighE\"></td>\
        </tr>\
        <tr class=\"Fret Second\">\
            <td class=\"LowE\"></td>\
            <td class=\"A\"></td>\
            <td class=\"D\"></td>\
            <td class=\"G\"></td>\
            <td class=\"H\"></td>\
            <td class=\"HighE\"></td>\
        </tr>\
        <tr class=\"Fret Third\">\
            <td class=\"LowE\"></td>\
            <td class=\"A\"></td>\
            <td class=\"D\"></td>\
            <td class=\"G\"></td>\
            <td class=\"H\"></td>\
            <td class=\"HighE\"></td>\
        </tr>\
        <tr class=\"Fret Fourth\">\
            <td class=\"LowE\"></td>\
            <td class=\"A\"></td>\
            <td class=\"D\"></td>\
            <td class=\"G\"></td>\
            <td class=\"H\"></td>\
            <td class=\"HighE\"></td>\
        </tr>" + fifthFretRow +
    "</tbody></table>\
    <div class=\"ChordName\">" + chordName + "</div>\
</div>"
    );

    var chordElement = parentElement.find(".chord" + "." + chordSymbol);

    if (fretNumber > 0)
        chordElement.prepend("<div class=\"FretNum\">" + fretNumber + ".</div>");

    chordMarksFunction(chordElement);
}

function addOpenString(fretboard, strings, notes) {
    if (Array.isArray(strings)) {
        strings.forEach(function (str, i) {

            var note = notes && Array.isArray(notes) && notes.length > i
                ? "<span class=\"Note\">"+notes[i]+"</span>"
                : '';

            fretboard.find(".Fret.Zero ." +str)
                     .append("<div class=\"OpenString\">"+note+"</div>");
        });
    } else {
        var note = notes ? "<span class=\"Note\">"+notes+"</span>" : '';
        fretboard.find(".Fret.Zero ." +strings)
                        .append("<div class=\"OpenString\">"+note+"</div>");
    }
}

function addMuteOne(fretboard, str) {
    fretboard.find(".Fret.Zero ." +str).append("<div class=\"Mute\">X</div>");
    fretboard.find(".Fret.First ." +str).addClass("Muted");
    fretboard.find(".Fret.Second ." +str).addClass("Muted");
    fretboard.find(".Fret.Third ." +str).addClass("Muted");
    fretboard.find(".Fret.Fourth ." +str).addClass("Muted");
    fretboard.find(".Fret.Fifth ." +str).addClass("Muted");
}

function addMute(fretboard, strings) {
    if (Array.isArray(strings)) {
        strings.forEach(function (str) {
            addMuteOne(fretboard, str);
        });
    } else {
        addMuteOne(fretboard, strings);
    }
}

function fretNumToName(fretNum) {
    switch (fretNum) {
        case 1: return "First";
        case 2: return "Second";
        case 3: return "Third";
        case 4: return "Fourth";
        case 5: return "Fifth";
    }
}

function addFretPress(fretboard, fretNum, strings, fingers) {
    var fretName = fretNumToName(fretNum);

    if (Array.isArray(strings)) {
        strings.forEach(function (str, i) {
            var finger = fingers && Array.isArray(fingers) && fingers.length > i ? "<span class=\"Finger\">"+fingers[i]+"</span>" : '';
            fretboard.find(".Fret."+fretName+" ." +str).append("<div class=\"Press\">"+finger+"</div>");
        });
    } else {
        var finger = fingers ? "<span class=\"Finger\">"+fingers+"</span>" : '';
        fretboard.find(".Fret."+fretName+" ." +strings).append("<div class=\"Press\">"+finger+"</div>");
    }
}

function addBarre(fretboard, fretNum, startString, endString, fingers) {
    var fretName = fretNumToName(fretNum);

    var startIndex = stringTones.indexOf(startString);
    var endIndex = stringTones.indexOf(endString);

    if (startIndex == -1 || endIndex == -1) {
        console.error("Cannot add barre chord. Invalid string name " + startString + ":" + endString);
    }

    var tones = [];
    for (var i = Math.min(startIndex, endIndex) + 1; i < Math.max(startIndex, endIndex); i++) {
        tones.push(stringTones[i]);
    }

    var fingersStartElem = fingers && Array.isArray(fingers)
        ? "<span class=\"Finger\">"+fingers[0]+"</span>"
        : '';
    var fingersEndElem = fingers && Array.isArray(fingers)
        ? "<span class=\"Finger\">"+fingers[fingers.length - 1]+"</span>"
        : '';

    fretboard.find(".Fret."+fretName+" ." +startString)
             .append("<div class=\"Barre Start\">"+fingersStartElem+"</div>");
    fretboard.find(".Fret."+fretName+" ." +endString)
             .append("<div class=\"Barre End\">"+fingersEndElem+"</div>");

    tones.forEach(function (t, i) {

        if (fingers && !Array.isArray(fingers) && i === Math.floor(tones.length / 2)) {
            var fingerElem = fingers && !Array.isArray(fingers)
                ? "<span class=\"Finger\">"+fingers+"</span>"
                : '';

            fretboard.find(".Fret."+fretName+" ." +t)
                     .append("<div class=\"Barre\">"+fingerElem+"</div>");

        } else if (Array.isArray(fingers)) {
            fretboard.find(".Fret."+fretName+" ." +t)
                     .append("<div class=\"Barre\"><span class=\"Finger\">"+fingers[i+1]+"</span></div>");

        } else {
            fretboard.find(".Fret."+fretName+" ." +t)
                     .append("<div class=\"Barre\"></div>");
        }
    });
}
