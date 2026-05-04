// Hostinger entry point.
// Loads Node-RED with the settings file in this folder.
process.argv.push('--settings', __dirname + '/settings.js');
require('node-red/red.js');
