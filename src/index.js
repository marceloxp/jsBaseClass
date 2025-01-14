const __jsBaseClassColors = new JsBaseClassColors();
const __jsBaseClassCookies = Cookies.noConflict();
let __jsBaseClassSilent = false;

if (document.querySelector('script[data-silent]')) {
    const script_jsBaseClass = document.querySelector('script[data-silent]');
    const src = script_jsBaseClass.getAttribute('src');
    if (src && src.includes('jsBaseClass.min.js')) {
        const silent = script_jsBaseClass.getAttribute('data-silent') || 'true';
        if (typeof silent === 'string' && silent === 'true') {
            __jsBaseClassSilent = true;
        }
    }
}

class JsBaseClass {
    constructor() {
        this.silent = __jsBaseClassSilent;
        this.console = new JsBaseClassColorConsole(this.constructor.name, __jsBaseClassSilent);
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
