const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/reports/',
    reportPath: './cypress/reports/html/',
    metadata: {
        browser: { name: 'chrome', version: 'latest' },
        device: 'Local Test Machine',
        platform: { name: 'windows' }
    },
    customData: {
        title: 'Relatório de Testes Automatizados',
        project: 'SauceDemo Project',
        release: '1.0.0'
    }
});