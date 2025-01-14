class jsBaseClassTrigger {
    static trigger(name, args) {
        const event = new CustomEvent(name, { detail: args });
        document.dispatchEvent(event);
    }

    static on(name, callback) {
        document.addEventListener(name, callback);
    }
}