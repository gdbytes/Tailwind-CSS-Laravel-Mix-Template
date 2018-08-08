/**
 * Load jQuery
 */
window.$ = window.jQuery = require('jquery');

/**
 * Load Font Awesome 5 (pro)
 */
import { library, dom } from '@fortawesome/fontawesome-svg-core'

// In most cases one weight would be enough.
import { fal } from '@fortawesome/pro-light-svg-icons';
// import { far } from '@fortawesome/pro-regular-svg-icons';
// import { fas } from '@fortawesome/pro-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';

// Add chosen libraries.
library.add(fab, fal);
// Find <i> in dom.
dom.watch();
