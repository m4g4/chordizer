
var Chordizer = (function ( $ ) {

    var STRING_TONES = ["LowE", "A", "D", "G", "H", "HighE"];

    function fretNumToName (fretNum) {
        switch (fretNum) {
            case 1: return "First";
            case 2: return "Second";
            case 3: return "Third";
            case 4: return "Fourth";
            case 5: return "Fifth";
        }
    }

    function Fretboard(fretboardObject) {
        this.jqObject = fretboardObject;
    }

    Fretboard.prototype.addOpenString = function (strings, notes) {
        if (Array.isArray(strings)) {
            var self = this;
            strings.forEach(function (str, i) {

                var note = notes && Array.isArray(notes) && notes.length > i
                    ? "<span class=\"Note\">"+notes[i]+"</span>"
                    : '';

                self.jqObject.find(".Fret.Zero ." +str)
                             .append("<div class=\"OpenString\">"+note+"</div>");
            });
        } else {
            var note = notes ? "<span class=\"Note\">"+notes+"</span>" : '';
            this.jqObject.find(".Fret.Zero ." +strings)
                         .append("<div class=\"OpenString\">"+note+"</div>");
        }

        return this;
    }

    Fretboard.prototype.addMuteOne = function (str) {
        this.jqObject.find(".Fret.Zero ." +str).append("<div class=\"Mute\">X</div>");
        this.jqObject.find(".Fret.First ." +str).addClass("Muted");
        this.jqObject.find(".Fret.Second ." +str).addClass("Muted");
        this.jqObject.find(".Fret.Third ." +str).addClass("Muted");
        this.jqObject.find(".Fret.Fourth ." +str).addClass("Muted");
        this.jqObject.find(".Fret.Fifth ." +str).addClass("Muted");

        return this;
    }

    Fretboard.prototype.addMute = function (fretboard, strings) {
        if (Array.isArray(strings)) {
            var self = this;
            strings.forEach(function (str) {
                self.addMuteOne(fretboard, str);
            });
        } else {
            this.addMuteOne(fretboard, strings);
        }

        return this;
    }

    Fretboard.prototype.addFretPress = function (fretNum, strings, fingers) {
        var fretName = fretNumToName(fretNum);
        var self = this;
        if (Array.isArray(strings)) {
            strings.forEach(function (str, i) {
                var finger = fingers && Array.isArray(fingers) && fingers.length > i ? "<span class=\"Finger\">"+fingers[i]+"</span>" : '';
                self.jqObject.find(".Fret."+fretName+" ." +str).append("<div class=\"Press\">"+finger+"</div>");
            });
        } else {
            var finger = fingers ? "<span class=\"Finger\">"+fingers+"</span>" : '';
            this.jqObject.find(".Fret."+fretName+" ." +strings).append("<div class=\"Press\">"+finger+"</div>");
        }

        return this;
    }

    Fretboard.prototype.addBarre = function (fretNum, startString, endString, fingers) {
        var fretName = fretNumToName(fretNum);

        var startIndex = STRING_TONES.indexOf(startString);
        var endIndex = STRING_TONES.indexOf(endString);

        if (startIndex == -1 || endIndex == -1) {
            console.error("Cannot add barre chord. Invalid string name " + startString + ":" + endString);
        }

        var tones = [];
        for (var i = Math.min(startIndex, endIndex) + 1; i < Math.max(startIndex, endIndex); i++) {
            tones.push(STRING_TONES[i]);
        }

        var fingersStartElem = fingers && Array.isArray(fingers)
            ? "<span class=\"Finger\">"+fingers[0]+"</span>"
            : '';
        var fingersEndElem = fingers && Array.isArray(fingers)
            ? "<span class=\"Finger\">"+fingers[fingers.length - 1]+"</span>"
            : '';

        this.jqObject.find(".Fret."+fretName+" ." +startString)
                 .append("<div class=\"Barre Start\">"+fingersStartElem+"</div>");
        this.jqObject.find(".Fret."+fretName+" ." +endString)
                 .append("<div class=\"Barre End\">"+fingersEndElem+"</div>");

        var self = this;
        tones.forEach(function (t, i) {

            if (fingers && !Array.isArray(fingers) && i === Math.floor(tones.length / 2)) {
                var fingerElem = fingers && !Array.isArray(fingers)
                    ? "<span class=\"Finger\">"+fingers+"</span>"
                    : '';

                self.jqObject.find(".Fret."+fretName+" ." +t)
                         .append("<div class=\"Barre\">"+fingerElem+"</div>");

            } else if (Array.isArray(fingers)) {
                self.jqObject.find(".Fret."+fretName+" ." +t)
                         .append("<div class=\"Barre\"><span class=\"Finger\">"+fingers[i+1]+"</span></div>");

            } else {
                self.jqObject.find(".Fret."+fretName+" ." +t)
                         .append("<div class=\"Barre\"></div>");
            }
        });

        return this;
    }

    document.addEventListener('DOMContentLoaded', function() {

        $(".chordizer").each( function( i, el ) {
            var elem = $( el );
            if (typeof elem.attr("custom") !== 'undefined') {
                return;
            }

            if (typeof elem.data("chord") === 'undefined') {
                console.error("Cannot render chord element. Attribute data-chord missing!");
                return;
            }

            var chordSymbol = elem.data("chord");

            var attributes = {};

            if (typeof elem.attr("small") !== 'undefined') {
                attributes['small'] = true;
            } else if (typeof elem.attr("large") !== 'undefined') {
                attributes['large'] = true;
            }

            if (typeof elem.data("title") !== 'undefined') {
                attributes['customTitle'] = elem.data("title");
            }

            Chordizer.addChordBySymbol(elem, chordSymbol, attributes);
        });

    });

    var addChordBySymbol = function (chordizerElement, chordSymbol, attributes) {

        chordSymbol = chordSymbol
            .replace('#', 'is')
            .replace('/', '_');

        if (!Chordizer[chordSymbol]) {
            console.error("Chord symbol " + chordSymbol + " does not exist!");
            return;
        }
        Chordizer[chordSymbol](chordizerElement, attributes);
    }

    var addCustomChord = function (parentElementId, chordSymbol, fretNumber, attributes) {
        return this.addChord($("#" + parentElementId), chordSymbol, fretNumber, attributes);
    }

    var addChord = function (parentElement, chordSymbol, fretNumber, attributes) {

        if (!attributes) {
            attributes = {};
        }

        chordSymbol = chordSymbol
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
            chordSymbol = attributes['customTitle'];
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
            <div class=\"ChordName\">" + chordSymbol + "</div>\
            </div>"
        );

        var chordElement = parentElement.find(".chord" + "." + chordSymbol);

        if (fretNumber > 0) {
            chordElement.prepend("<div class=\"FretNum\">" + fretNumber + ".</div>");
        }

        return new Fretboard(chordElement);
    }

    return {
        addChordBySymbol: addChordBySymbol,
        addCustomChord: addCustomChord,
        addChord: addChord
    };

})( jQuery );
