class ClassTriggers1 extends JsBaseClass {
    async handle() {
        const trigger_name_1 = 'my-event-from-class-1';
        this.on(trigger_name_1, (args) => {
            this.console.log(`💥 Event triggered: ${trigger_name_1}`, args.detail);
        });

        const trigger_name_2 = 'my-event-from-class-2';
        this.on(trigger_name_2, (args) => {
            this.console.log(`💥 Event triggered: ${trigger_name_2}`, args.detail);
        });

        this.trigger('my-event-from-class-1', 'Hello World!');
    }
}

window.objTriggers1 = new ClassTriggers1();
objTriggers1.init();
