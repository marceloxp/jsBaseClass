const __jsBaseClassColors = new JsBaseClassColors();
const __jsBaseClassCookies = Cookies.noConflict();

class JsBaseClass {
    constructor(silent = true) {
        this.silent = silent;
        this.console = new JsBaseClassColorConsole(this.constructor.name, silent);
        this.console.setColor(__jsBaseClassColors.get());
        this.console.log('jsBaseClass initialized');
        this.cookies = __jsBaseClassCookies;

        this.getBrowser();
    }

    async init() {
        if (typeof this.handle === 'function') {
            await this.handle();
        }
    }

    getBrowser() {
        const parser = new UAParser();
        this.info_browser = parser.getResult();
        this.browser = this.info_browser.browser;
        this.is = this.console.is;
    }

    trigger(name, args) {
        this.console.log('📣 trigger', name, args);
        JsBaseClassTrigger.trigger(name, args);
    }

    on(name, callback) {
        this.console.log('🎧 trigger', name);
        JsBaseClassTrigger.on(name, callback);
    }
}
