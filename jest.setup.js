var $ = require("jquery");
global.$ = $;
global.jQuery = $;

var chordizer = require("./js/chordizer");
global.Chordizer = chordizer.Chordizer;
global.ALPHABET = chordizer.ALPHABET;
global.SupportedChordExtensions = chordizer.SupportedChordExtensions;

require("./js/chords_a");
require("./js/chords_c");
require("./js/chords_d");
require("./js/chords_e");
require("./js/chords_f");
require("./js/chords_g");
require("./js/chords_h");
