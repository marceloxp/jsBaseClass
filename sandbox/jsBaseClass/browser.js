class ClassBrowser extends JsBaseClass {
    async handle() {
        this.console.log('Browser', this.browser);
        this.console.log('Info Browser', this.info_browser);
    }
}

(async () => {
    const objBrowser = new ClassBrowser();
    await objBrowser.init();
})();
