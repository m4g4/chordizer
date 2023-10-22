var ALPHABET = ["A", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
var SupportedChordExtensions = [
    "", // basic major chord
    "m",
    "6",
    "7",
    "9",
    "m6",
    "m7",
    "maj7",
    "dim",
    "dim7",
    "aug",
    "sus",
    "sus2",
    "sus4",
    "add9",
];

var Chordizer = (function ($) {
    var STRING_TONES = ["LowE", "A", "D", "G", "H", "HighE"];

    function fretNumToName(fretNum) {
        switch (fretNum) {
            case 1:
                return "First";
            case 2:
                return "Second";
            case 3:
                return "Third";
            case 4:
                return "Fourth";
            case 5:
                return "Fifth";
        }
    }

    function Fretboard(fretboardObject) {
        this.jqObject = fretboardObject;
    }

    Fretboard.prototype.addOpenString = function (strings, notes) {
        if (Array.isArray(strings)) {
            var self = this;
            strings.forEach(function (str, i) {
                var note =
                    notes && Array.isArray(notes) && notes.length > i
                        ? '<span class="Note">' + notes[i] + "</span>"
                        : "";

                self.jqObject
                    .find(".Fret.Zero ." + str)
                    .append('<div class="OpenString">' + note + "</div>");
            });
        } else {
            var note = notes ? '<span class="Note">' + notes + "</span>" : "";
            this.jqObject
                .find(".Fret.Zero ." + strings)
                .append('<div class="OpenString">' + note + "</div>");
        }

        return this;
    };

    Fretboard.prototype.addMuteOne = function (str) {
        this.jqObject
            .find(".Fret.Zero ." + str)
            .append('<div class="Mute">X</div>');
        this.jqObject.find(".Fret.Previous ." + str).addClass("Muted");
        this.jqObject.find(".Fret.First ." + str).addClass("Muted");
        this.jqObject.find(".Fret.Second ." + str).addClass("Muted");
        this.jqObject.find(".Fret.Third ." + str).addClass("Muted");
        this.jqObject.find(".Fret.Fourth ." + str).addClass("Muted");
        this.jqObject.find(".Fret.Fifth ." + str).addClass("Muted");

        return this;
    };

    Fretboard.prototype.addMute = function (strings) {
        if (Array.isArray(strings)) {
            var self = this;
            strings.forEach(function (str) {
                self.addMuteOne(str);
            });
        } else {
            this.addMuteOne(strings);
        }

        return this;
    };

    Fretboard.prototype.addFretPress = function (fretNum, strings, fingers) {
        var fretName = fretNumToName(fretNum);
        var self = this;
        if (Array.isArray(strings)) {
            strings.forEach(function (str, i) {
                var finger =
                    fingers && Array.isArray(fingers) && fingers.length > i
                        ? '<span class="Finger">' + fingers[i] + "</span>"
                        : "";
                self.jqObject
                    .find(".Fret." + fretName + " ." + str)
                    .append('<div class="Press">' + finger + "</div>");
            });
        } else {
            var finger = fingers
                ? '<span class="Finger">' + fingers + "</span>"
                : "";
            this.jqObject
                .find(".Fret." + fretName + " ." + strings)
                .append('<div class="Press">' + finger + "</div>");
        }

        return this;
    };

    Fretboard.prototype.addBarre = function (
        fretNum,
        startString,
        endString,
        fingers
    ) {
        var fretName = fretNumToName(fretNum);

        var startIndex = STRING_TONES.indexOf(startString);
        var endIndex = STRING_TONES.indexOf(endString);

        if (startIndex == -1 || endIndex == -1) {
            console.error(
                "Cannot add barre chord. Invalid string name " +
                    startString +
                    ":" +
                    endString
            );
        }

        var tones = [];
        for (
            var i = Math.min(startIndex, endIndex) + 1;
            i < Math.max(startIndex, endIndex);
            i++
        ) {
            tones.push(STRING_TONES[i]);
        }

        var fingersStartElem =
            fingers && Array.isArray(fingers)
                ? '<span class="Finger">' + fingers[0] + "</span>"
                : "";
        var fingersEndElem =
            fingers && Array.isArray(fingers)
                ? '<span class="Finger">' +
                  fingers[fingers.length - 1] +
                  "</span>"
                : "";

        this.jqObject
            .find(".Fret." + fretName + " ." + startString)
            .append('<div class="Barre Start">' + fingersStartElem + "</div>");
        this.jqObject
            .find(".Fret." + fretName + " ." + endString)
            .append('<div class="Barre End">' + fingersEndElem + "</div>");

        var self = this;
        tones.forEach(function (t, i) {
            if (
                fingers &&
                !Array.isArray(fingers) &&
                i === Math.floor(tones.length / 2)
            ) {
                var fingerElem =
                    fingers && !Array.isArray(fingers)
                        ? '<span class="Finger">' + fingers + "</span>"
                        : "";

                self.jqObject
                    .find(".Fret." + fretName + " ." + t)
                    .append('<div class="Barre">' + fingerElem + "</div>");
            } else if (Array.isArray(fingers)) {
                self.jqObject
                    .find(".Fret." + fretName + " ." + t)
                    .append(
                        '<div class="Barre"><span class="Finger">' +
                            fingers[i + 1] +
                            "</span></div>"
                    );
            } else {
                self.jqObject
                    .find(".Fret." + fretName + " ." + t)
                    .append('<div class="Barre"></div>');
            }
        });

        return this;
    };

    document.addEventListener("DOMContentLoaded", function () {
        initialize();
    });

    var mutationCallback = function (mutationsList) {
        for (var i = 0; i < mutationsList.length; i++) {
            var mutation = mutationsList[i];
            $(mutation.target).empty();
            initializeChord(mutation.target);
        }
    };

    var mutationObserver = new MutationObserver(mutationCallback);

    var initializeChord = function (element) {
        var elem = $(element);
        if (typeof elem.attr("custom") !== "undefined") {
            return false;
        }

        if (typeof elem.attr("data-chord") === "undefined") {
            console.error(
                "Cannot render chord element. Attribute data-chord missing!"
            );
            return false;
        }

        var chordSymbol = elem.attr("data-chord");

        var attributes = {};

        if (typeof elem.attr("small") !== "undefined") {
            attributes["small"] = true;
        } else if (typeof elem.attr("large") !== "undefined") {
            attributes["large"] = true;
        }

        attributes["chord-version"] = elem.attr("chord-version");

        if (typeof elem.attr("data-title") !== "undefined") {
            attributes["customTitle"] = elem.attr("data-title");
        }

        addChordBySymbol(elem, chordSymbol, attributes);

        return true;
    };

    var initialize = function () {
        $(".chordizer").each(function (_, element) {
            if (initializeChord(element))
                mutationObserver.observe(element, { attributes: true });
        });
    };

    var toChordId = function (chordSymbol) {
        return chordSymbol
            .replace("#", "is")
            .replace("/", "_")
            .replace("+", "aug");
    };

    var addChordBySymbol = function (parentElement, chordSymbol, attributes) {
        var chordId = toChordId(chordSymbol);

        var version = attributes && attributes["chord-version"];
        if (version && Chordizer[chordId + "v" + version]) {
            chordId = chordId + "v" + version;
        }

        if (!Chordizer[chordId]) {
            console.error("Chord " + chordId + " does not exist!");
            return;
        }
        Chordizer[chordId](parentElement, attributes);
    };

    var addCustomChord = function (
        parentElementId,
        chordTitle,
        fretNumber,
        attributes
    ) {
        return this.addChord(
            $("#" + parentElementId),
            chordTitle,
            fretNumber,
            attributes
        );
    };

    var addChord = function (
        parentElement,
        chordTitle,
        fretNumber,
        attributes
    ) {
        if (!attributes) {
            attributes = {};
        }

        var chordId = toChordId(chordTitle);

        var fretTds =
            '\
            <td class="LowE"></td >\
            <td class="A"></td>\
            <td class="D"></td>\
            <td class="G"></td>\
            <td class="H"></td>\
            <td class="HighE"></td>\
        ';

        var extraClass = attributes["hasFiveFrets"] ? " hasFiveFrets" : "";
        var fifthFretRow = attributes["hasFiveFrets"]
            ? '<tr class="Fret Fifth">' + fretTds + "</tr>"
            : "";

        extraClass += attributes["small"] ? " small" : "";
        extraClass += attributes["large"] ? " large" : "";

        if (attributes["customTitle"]) {
            chordName = attributes["customTitle"];
        }

        parentElement.append(
            '<div class="chord ' +
                chordId +
                extraClass +
                '">\
            <table>\
            <tbody><tr class="Fret Zero">' +
                fretTds +
                '</tr>\
            <tr class="Fret Previous">' +
                fretTds +
                '</tr>\
            <tr class="Fret First">' +
                fretTds +
                '</tr>\
            <tr class="Fret Second">' +
                fretTds +
                '</tr>\
            <tr class="Fret Third">' +
                fretTds +
                '</tr>\
            <tr class="Fret Fourth">' +
                fretTds +
                "</tr>" +
                fifthFretRow +
                '</tbody></table>\
            <div class="ChordName">' +
                chordTitle +
                "</div>\
            </div>"
        );

        var chordElement = parentElement.find(".chord" + "." + chordId);

        if (fretNumber <= 1) {
            chordElement.addClass("FromZeroFret");
        } else {
            chordElement.prepend(
                '<div class="FretNum">' + fretNumber + ".</div>"
            );
        }

        return new Fretboard(chordElement);
    };

    return {
        addChordBySymbol: addChordBySymbol,
        addCustomChord: addCustomChord,
        addChord: addChord,
    };
})(jQuery);

module.exports = {
    Chordizer,
    ALPHABET,
    SupportedChordExtensions,
};
