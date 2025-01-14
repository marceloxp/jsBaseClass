const __jsBaseClassColors = new jsBaseClassColors();
const __jsBaseClassCookies = Cookies.noConflict();

class jsBaseClass {
    constructor(silent = true) {
        this.silent = silent;
        this.console = new jsBaseClassColorConsole(this.constructor.name, silent);
        this.console.setColor(__jsBaseClassColors.get());
        this.console.log('jsBaseClass initialized');
        this.cookies = __jsBaseClassCookies;

        this.getBrowser();
    }

    getBrowser() {
        const parser = new UAParser();
        this.info_browser = parser.getResult();
        this.browser = this.info_browser.browser;
        this.is = this.console.is;
    }

    trigger(name, args) {
        this.console.log('📣 trigger', name, args);
        jsBaseClassTrigger.trigger(name, args);
    }

    on(name, callback) {
        this.console.log('🎧 trigger', name);
        jsBaseClassTrigger.on(name, callback);
    }
}
