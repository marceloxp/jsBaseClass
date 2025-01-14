class jsBaseClassColors {
    constructor() {
        this.colors = [
            'purple', 'darkolivegreen', 'slategray', 'saddlebrown', 'coral', '#884c17',
            'lightseagreen', 'firebrick', 'gold', 'limegreen', 'darkslateblue', 'tomato'
        ];
        this.list = [...this.colors];
    }

    /**
     * Retorna a próxima cor da lista e reinicia a lista quando esvaziada.
     * @returns {string} A próxima cor disponível.
     */
    get() {
        const result = this.list.shift();
        if (this.list.length === 0) {
            this.list = [...this.colors];
        }
        return result;
    }

    /**
     * Converte uma cor nomeada em seu valor hexadecimal.
     * @param {string} colour - Nome da cor.
     * @returns {string} Valor hexadecimal da cor ou o valor original se não encontrado.
     */
    static colourNameToHex(colour) {
        const colours = {
            aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff",
            beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff",
            blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00",
            chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c",
            cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9",
            darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00",
            darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff",
            dimgray: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22",
            fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080",
            green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082",
            ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa", lightslategray: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00",
            limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970",
            mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6",
            olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa",
            palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9",
            peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", red: "#ff0000", rosybrown: "#bc8f8f",
            royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee",
            sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", snow: "#fffafa",
            springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347",
            turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };
        return colours[colour.toLowerCase()] || colour;
    }
}

class jsBaseClassColorUtils {
    /**
     * Converte uma cor hexadecimal para um objeto RGB.
     * @param {string} hex - Cor em formato hexadecimal.
     * @returns {{r: number, g: number, b: number} | null} Objeto RGB ou null se inválido.
     */
    static hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    /**
     * Calcula uma cor de alto contraste (preto ou branco) baseada em um valor RGB.
     * @param {{r: number, g: number, b: number}} rgbColor - Objeto RGB.
     * @returns {string} Cor de alto contraste em hexadecimal (#000000 ou #ffffff).
     */
    static invertRgb(rgbColor) {
        const luminance = Math.round(((parseInt(rgbColor.r) * 299) + (parseInt(rgbColor.g) * 587) + (parseInt(rgbColor.b) * 114)) / 1000);
        return (luminance > 125) ? '#000000' : '#ffffff';
    }

    /**
     * Inverte uma cor hexadecimal.
     * @param {string} hex - Cor em formato hexadecimal.
     * @returns {string | boolean} Cor invertida ou false se inválida.
     */
    static invertHex(hex) {
        if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
            return false;
        }

        // Remove o '#' e converte para RGB
        let r = (255 - parseInt(hex.slice(1, 3), 16)).toString(16);
        let g = (255 - parseInt(hex.slice(3, 5), 16)).toString(16);
        let b = (255 - parseInt(hex.slice(5, 7), 16)).toString(16);

        // Garante que cada componente tenha dois dígitos
        r = r.length === 1 ? '0' + r : r;
        g = g.length === 1 ? '0' + g : g;
        b = b.length === 1 ? '0' + b : b;

        return `#${r}${g}${b}`;
    }
}

class jsBaseClassColorConsole {
    constructor(name = 'Untitled', silent = true) {
        this.debug = !silent;
        this.version = '1.0.0';
        this.name = name;
        this.format = {};
        this.setColor('white');
        this.getBrowser();
        this.is = {
            chrome: this.isChrome(),
            firefox: this.isFirefox(),
            safari: this.isSafari(),
            ie: this.isIE(),
            edge: this.isEdge(),
            other: !this.isChrome() && !this.isFirefox() && !this.isSafari() && !this.isIE() && !this.isEdge(),
        };
        this.jsBaseClassColors = new jsBaseClassColors();
        this.setActive(true);
    }

    getBrowser() {
        const parser = new UAParser();
        this.info_browser = parser.getResult();
        this.browser = this.info_browser.browser;
    }

    isChrome() {
        return this.browser.name === 'Chrome';
    }

    isFirefox() {
        return this.browser.name === 'Firefox';
    }

    isSafari() {
        return this.browser.name === 'Safari';
    }

    isIE(version) {
        return this.browser.name === 'IE';
    }

    isEdge() {
        return this.browser.name === 'Edge';
    }

    setActive(isActive) {
        this.active = isActive;
        this.refreshFmtCap();
    }

    setColor(color) {
        const hexColor = jsBaseClassColors.colourNameToHex(color);
        const rgbColor = jsBaseClassColorUtils.hexToRgb(hexColor);

        if (rgbColor) {
            this.format.background = hexColor;
            this.format.color = jsBaseClassColorUtils.invertRgb(rgbColor);
        } else {
            console.error('Invalid color provided:', color);
        }
    }

    refreshFmtCap() {
        this.capfmt = (this.is.chrome || this.is.firefox) && this.active;
        this.capbro = this.is.chrome || this.is.firefox;
    }

    getFmtColorName(name) {
        const strBackground = this.is.firefox ? 'background-color' : 'background';
        const fontWeight = this.format.color === '#000000' ? 'normal' : 'bold';
        return [
            `%c${name}`,
            `padding: 2px 5px; border: 1px solid black; font-weight: ${fontWeight}; color: ${this.format.color}; ${strBackground}: ${this.format.background};`
        ];
    }

    log(...args) {
        if (this.debug) {
            if (!this.capfmt) {
                console.log(this.name, ...args);
            } else {
                const [label, style] = this.getFmtColorName(this.name);
                console.log(label, style, ...args);
            }
        }
    }

    info(...args) {
        if (this.debug) {
            if (!this.capfmt) {
                console.info(this.name, ...args);
            } else {
                const [label, style] = this.getFmtColorName(this.name);
                console.info(label, style, ...args);
            }
        }
    }

    warn(...args) {
        if (this.debug) {
            if (!this.capfmt) {
                console.warn(this.name, ...args);
            } else {
                const [label, style] = this.getFmtColorName(this.name);
                console.warn(label, style, ...args);
            }
        }
    }

    error(...args) {
        if (this.debug) {
            if (!this.capfmt) {
                console.error(this.name, ...args);
            } else {
                const [label, style] = this.getFmtColorName(this.name);
                console.error(label, style, ...args);
            }
        }
    }

    trace(...args) {
        if (this.debug) {
            if (!this.capfmt) {
                console.trace(this.name, ...args);
            } else {
                const [label, style] = this.getFmtColorName(this.name);
                console.trace(label, style, ...args);
            }
        }
    }
}

// Exemplo de uso:
// const myColors = new jsBaseClassColors();
// console.log(myColors.get()); // Retorna a próxima cor da lista
// console.log(jsBaseClassColors.colourNameToHex('tomato')); // Converte 'tomato' para hexadecimal

// console.log(jsBaseClassColorUtils.hexToRgb('#FF5733')); // { r: 255, g: 87, b: 51 }
// console.log(jsBaseClassColorUtils.invertRgb({ r: 205, g: 205, b: 205 })); // '#000000'
// console.log(jsBaseClassColorUtils.invertHex('#FF5733')); // '#00A8CC'

// const consoleLogger = new jsBaseClassColorConsole('MyApp');
// consoleLogger.setColor('lightseagreen');
// consoleLogger.log('This is a log message');
// consoleLogger.info('This is an info message');
// consoleLogger.warn('This is a warning message');
// consoleLogger.error('This is an error message');