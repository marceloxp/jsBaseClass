class ClassExample extends JsBaseClass {
    async handle() {

    }
}


(async () => {
    const objExample = new ClassExample();
    await objExample.init();
})();
