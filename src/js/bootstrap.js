/**
 * Load jQuery
 */
window.$ = window.jQuery = require('jquery');

/**
 * Load Font Awesome 5 (pro)
 */
const FontAwesome = require('@fortawesome/fontawesome');

// In most cases one weight would suffice.
const FaProLight = require('@fortawesome/fontawesome-pro-light')['default'];
// const FaProRegular = require('@fortawesome/fontawesome-pro-regular')['default'];
// const FaProSolid = requrie('@fortawesome/font-awesome-pro-solid')['default'];

const FaFreeBrands = require('@fortawesome/fontawesome-free-brands')['default'];

// Add chosen libraries.
FontAwesome.library.add(FaFreeBrands, FaProLight);
