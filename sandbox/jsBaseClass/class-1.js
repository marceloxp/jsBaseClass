class myClass1 extends jsBaseClass {
    constructor(silent = false) {
        super(silent);
        this.init();
    }

    init() {
        const trigger_name_1 = 'my-event-from-class-1';
        this.on(trigger_name_1, (args) => {
            this.console.log(`Evento disparado: ${trigger_name_1}`, args.detail);
        });

        const trigger_name_2 = 'my-event-from-class-2';
        this.on(trigger_name_2, (args) => {
            this.console.log(`Evento disparado: ${trigger_name_2}`, args.detail);
        });

        this.trigger('my-event-from-class-1', 'Hello World!');
    }
}
const myClass1Instance = new myClass1();
