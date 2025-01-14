const __jsBaseClassColors = new jsBaseClassColors();
const __jsBaseClassCookies = Cookies.noConflict();

class jsBaseClass {
    constructor(silent = true) {
        this.silent = silent;
        this.console = new jsBaseClassColorConsole(this.constructor.name, silent);
        this.console.setColor(__jsBaseClassColors.get());
        this.console.log('jsBaseClass initialized');
        this.cookies = __jsBaseClassCookies;
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
