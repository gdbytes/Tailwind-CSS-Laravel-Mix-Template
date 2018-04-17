let mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix
    .setPublicPath('./public/assets')
    .js('src/js/app.js', 'public/assets/js')
    .sass('src/scss/style.scss', 'public/assets/css')
    .tailwind()
    .version();
