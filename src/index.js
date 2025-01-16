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
        this.console.log(`JsBaseClass ${this.constructor.name} initialized`);
        this.cookies = __jsBaseClassCookies;
        this.q = document.querySelectorAll.bind(document);
        this.qs = document.querySelector.bind(document);

        this.getBrowser();
        this._onDomContentLoaded();
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
        JsBaseClassTrigger.on(name, callback);
    }

    setCookie(name, value, options = {}) {
        this.cookies.set(name, value, options);
        this.console.log(`🍪 Cookie set: ${name} = ${value}`, options);
    }

    getCookie(name, defaultValue = undefined) {
        const value = this.cookies.get(name) || defaultValue;
        this.console.log(`🍪 Cookie get: ${name} = ${value}`);
        return value;
    }

    removeCookie(name, options = {}) {
        this.cookies.remove(name, options);
        this.console.log(`🍪 Cookie removed: ${name}`, options);
    }

    _onDomContentLoaded() {
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof this.onDomContentLoaded === 'function') {
                this.onDomContentLoaded();
            }
        });
    }
}
