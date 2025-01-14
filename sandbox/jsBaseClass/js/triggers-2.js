class ClassTriggers2 extends JsBaseClass {
    async handle() {
        this.trigger('my-event-from-class-2', 'Hello World!');
    }
}

(async () => {
    window.objTriggers2 = new ClassTriggers2();
    await objTriggers2.init();
})();
