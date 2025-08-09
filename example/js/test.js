class JsBaseApp extends JsBaseClass {
    async handle() {
        // Your initialization code here
    }

    async onDomContentLoaded() {
        // On DOM content loaded (page load)
        
    }
}

window.jsBaseApp = new JsBaseApp();
window.jsBaseApp.init();