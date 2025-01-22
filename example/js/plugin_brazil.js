class ClassBrazilValidator extends JsBaseClass {
    async handle() {
        const cpf = '111.111.111-11';
        const valid = this.brazil.isValidCpf(cpf);
        if (valid) {
            this.console.success(`🚀 ${cpf} is valid`);
        } else {
            this.console.error(`🚀 ${cpf} is invalid!!!`);
        }
    }
}

window.objBrazilValidator = new ClassBrazilValidator();
objBrazilValidator.init();