class ClassExample extends JsBaseClass {
    async handle() {
        this.console.log('Your code starts here...');
    }

    async onDomContentLoaded() {
        this.console.log('DOM content loaded');
    }
}

window.objExample = new ClassExample();
objExample.init();