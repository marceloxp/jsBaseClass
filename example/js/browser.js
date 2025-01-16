class ClassBrowser extends JsBaseClass {
    async handle() {
        this.console.log('Browser', this.browser);
        this.console.log('Info Browser', this.info_browser);
    }
}

window.objBrowser = new ClassBrowser();
objBrowser.init();