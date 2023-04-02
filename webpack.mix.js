const mix = require('laravel-mix');

mix.postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
])
.vite()
.browserSync({
    proxy: 'http://localhost:8000', // altere para a porta do seu servidor do Laravel
    open: false,
});

mix.options({
    hmrOptions: {
        host: 'localhost',
        port: 8000,
        https: false, // força o protocolo http
    },
});

if (mix.inProduction()) {
    mix.version();
}
