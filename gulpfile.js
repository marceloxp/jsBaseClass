const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const header = require('gulp-header');
const replace = require('gulp-replace');
const package = require('./package.json');
const settingsPath = path.join(__dirname, '.vscode', 'settings.json');

// Cabeçalho personalizado
const banner = `/**
* JsBaseClass - A lightweight JavaScript base class for logging, event handling, and browser detection.
* Version: ${package.version}
* Repository: https://github.com/marceloxp/jsBaseClass
* License: MIT
* Author: Marcelo XP
* Build Date: ${new Date().toISOString().split('T')[0]}
*/
`;

const banner_brazil = `/**
* JsBaseClassPluginBrazil - A JsBaseClass plugin for Brazilian validations.
* Version: ${package.version}
* Repository: https://github.com/marceloxp/jsBaseClass
* License: MIT
* Author: Marcelo XP
* Build Date: ${new Date().toISOString().split('T')[0]}
*/
`;

// Tarefa para build
gulp.task('build', () => {
    return gulp
        .src([
            'src/libs/js.cookie.min.js', // Biblioteca js.cookie
            'src/libs/ua-parser.js',     // Biblioteca ua-parser-js
            'src/libs/axios.min.js',     // Biblioteca axios
            'src/console.js',            // Arquivo console.js
            'src/trigger.js',            // Arquivo trigger.js
            'src/index.js',              // Arquivo index.js
        ])
        .pipe(concat('jsBaseClass.min.js')) // Concatena todos os arquivos em um único arquivo
        .pipe(terser({
            format: {
                comments: false, // Remove todos os comentários, exceto os preservados
            },
        }))
        .pipe(header(banner))               // Adiciona o cabeçalho personalizado
        .pipe(replace(/^\s*[\r\n]+/, ''))   // Remove linhas em branco no início do arquivo
        .pipe(gulp.dest('dist'));           // Salva o arquivo na pasta dist
});

gulp.task('build_plugin_brazil', () => {
    return gulp
        .src([
            'src/plugins/brazil.js',        // Arquivo cpf.js
        ])
        .pipe(concat('jsBaseClassPluginBrazil.min.js')) // Concatena todos os arquivos em um único arquivo
        .pipe(terser({
            format: {
                comments: false, // Remove todos os comentários, exceto os preservados
            },
        }))
        .pipe(header(banner_brazil))               // Adiciona o cabeçalho personalizado
        .pipe(replace(/^\s*[\r\n]+/, ''))   // Remove linhas em branco no início do arquivo
        .pipe(gulp.dest('dist'));           // Salva o arquivo na pasta dist
});

gulp.task('updateStatusBar', (done) => {
    const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));

    const version = package.version;
    settings.statusbartext = {
        active: true,
        text: `🏷️ JsBaseClass v${version}`
    };

    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 4));
    console.log(`Status bar updated to version v${version}`);
    done();
});

// Tarefa padrão (executa a tarefa 'build')
gulp.task('default', gulp.parallel('build', 'build_plugin_brazil'));