class ClassExample extends jsBaseClass {
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
