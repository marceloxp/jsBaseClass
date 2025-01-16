class ClassCookies extends JsBaseClass {
    async handle() {
        // Define um cookie
        this.setCookie('username', 'MarceloXP');

        // Obtém o valor de um cookie
        const username = this.getCookie('username');
        this.console.log('Username cookie:', username);

        // Remove um cookie
        this.removeCookie('username');

        // Verifica se o cookie foi removido
        const removedCookie = this.getCookie('username');
        this.console.log('Username cookie after removal:', removedCookie);
    }

    /**
     * Define um cookie.
     * @param {string} name - Nome do cookie.
     * @param {string} value - Valor do cookie.
     * @param {object} options - Opções adicionais (ex: expires, path, domain).
     */
    setCookie(name, value, options = {}) {
        this.cookies.set(name, value, options);
        this.console.log(`🍪 Cookie set: ${name} = ${value}`);
    }

    /**
     * Obtém o valor de um cookie.
     * @param {string} name - Nome do cookie.
     * @returns {string} Valor do cookie ou undefined se não existir.
     */
    getCookie(name) {
        const value = this.cookies.get(name);
        this.console.log(`🍪 Cookie get: ${name} = ${value}`);
        return value;
    }

    /**
     * Remove um cookie.
     * @param {string} name - Nome do cookie.
     * @param {object} options - Opções adicionais (ex: path, domain).
     */
    removeCookie(name, options = {}) {
        this.cookies.remove(name, options);
        this.console.log(`🍪 Cookie removed: ${name}`);
    }
}

// Inicializa a classe de cookies
window.objCookies = new ClassCookies();
objCookies.init();