class ClassAxios extends JsBaseClass {
    async handle() {
        await this.getData();
        await this.getNonExistsData();
    }

    async getData() {
        try {
            this.console.info(`1️⃣ Before Get Data`);
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            this.console.log(`✅ Get Data`, response.data);
        } catch (error) {
            this.console.log(`🚨 ${error.message}`, error);
        } finally {
            this.console.log(`2️⃣ After Get Data`);
        }
    }

    async getNonExistsData() {
        try {
            this.console.info(`1️⃣ Before Get Non Exists Data`);
            const response = await axios.get('https://not-exists/json/1');
            this.console.log(response.data);
        } catch (error) {
            this.console.log(`🚨 ${error.message}`, error);
        } finally {
            this.console.log(`2️⃣ After Get Non Exists Data`);
        }
    }
}

// See more: // https://axios-http.com/docs/req_config
window.objAxios = new ClassAxios();
objAxios.init();