const { ALPHABET, SupportedChordExtensions } = require("../chordizer");

function addElementWithStyles(tag, clazz, style) {
    const newDiv = $(tag);
    clazz && newDiv.addClass(clazz);
    style && newDiv.css(style);
    return newDiv;
}

function createLink(href) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;

    return link;
}

describe("Chordizer", () => {
    it("renders all chords correctly", () => {
        const root = $(document.body);
        $(document.head)
            .append(
                createLink("../../../node_modules/normalize.css/normalize.css")
            )
            .append(createLink("../../../css/chordizer.css"));

        const chordizerDiv = addElementWithStyles("<div>", "chordizer", {
            display: "flex",
            flexDirection: "column",
        });
        root.append(chordizerDiv);

        for (var i = 0; i < ALPHABET.length; i++) {
            const base = ALPHABET[i];

            const baseDiv = addElementWithStyles("<div>", base, {
                display: "flex",
            });
            chordizerDiv.append(baseDiv);

            for (var j = 0; j < SupportedChordExtensions.length; j++) {
                const chord = base + SupportedChordExtensions[j];
                Chordizer.addChordBySymbol(baseDiv, chord, { small: true });
            }
        }

        expect(document).toMatchSnapshot();
    });
});
