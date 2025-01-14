class ClassExample extends JsBaseClass {
    constructor(silent = false) {
        super(silent);
    }

    async handle() {

    }
}


(async () => {
    const objExample = new ClassExample();
    await objExample.init();
})();
