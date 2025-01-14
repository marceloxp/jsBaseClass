class ClassAxios extends JsBaseClass {
    constructor(silent = false) {
        super(silent);
    }

    async handle() {
        await this.getData();
        await this.getNonExistsData();
    }

    async getData() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            this.console.log(`✅ Get Data`, response.data);
        } catch (error) {
            this.console.log(`🚨 ${error.message}`, error);
        }
    }

    async getNonExistsData() {
        try {
            const response = await axios.get('https://not-exists/json/1');
            this.console.log(response.data);
        } catch (error) {
            this.console.log(`🚨 ${error.message}`, error);
        }
    }
}

// See more: // https://axios-http.com/docs/req_config
(async () => {
    const objAxions = new ClassAxios();
    await objAxions.init();
})();
