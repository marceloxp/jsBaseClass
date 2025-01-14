class ClassTriggers1 extends JsBaseClass {
    constructor(silent = false) {
        super(silent);
    }

    async handle() {
        const trigger_name_1 = 'my-event-from-class-1';
        this.on(trigger_name_1, (args) => {
            this.console.log(`💥 Evento disparado: ${trigger_name_1}`, args.detail);
        });

        const trigger_name_2 = 'my-event-from-class-2';
        this.on(trigger_name_2, (args) => {
            this.console.log(`💥 Evento disparado: ${trigger_name_2}`, args.detail);
        });

        this.trigger('my-event-from-class-1', 'Hello World!');
    }
}


(async () => {
    const objTriggers1 = new ClassTriggers1();
    await objTriggers1.init();
})();
