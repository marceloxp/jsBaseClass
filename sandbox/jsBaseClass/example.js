class ClassExample extends JsBaseClass {
    async handle() {

    }
}

(async () => {
    window.objExample = new ClassExample();
    await objExample.init();
})();
