class JsBaseClassBrazil {
    isValidCpf(cpf) {
        let sum = 0;
        let remainder;

        // Remove non-digit characters
        const strCPF = String(cpf).replace(/[^\d]/g, '');

        // Check if the CPF has the correct length
        if (strCPF.length !== 11)
            return false;

        // Check for known invalid CPFs
        if ([
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999',
        ].includes(strCPF))
            return false;

        // Validate the first check digit
        for (let i = 1; i <= 9; i++) {
            sum += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        }
        remainder = (sum * 10) % 11;

        if (remainder === 10 || remainder === 11)
            remainder = 0;

        if (remainder !== parseInt(strCPF.substring(9, 10)))
            return false;

        // Validate the second check digit
        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        }
        remainder = (sum * 10) % 11;

        if (remainder === 10 || remainder === 11)
            remainder = 0;

        if (remainder !== parseInt(strCPF.substring(10, 11)))
            return false;

        return true; // The CPF is valid
    }
}

if (!JsBaseClass || !JsBaseClass.prototype) {
    throw new Error('JsBaseClass is not installed. Please install it first.');
}

if (!JsBaseClass.prototype.brazil) {
    JsBaseClass.prototype.brazil = new JsBaseClassBrazil();
}
