class ClassTriggers2 extends jsBaseClass {
    constructor(silent = false) {
        super(silent);
    }

    async handle() {
        this.trigger('my-event-from-class-2', 'Hello World!');
    }
}


(async () => {
    const objTriggers2 = new ClassTriggers2();
    await objTriggers2.init();
})();
