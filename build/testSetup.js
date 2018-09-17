//This file isn't transpiled. So must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that mocha does'nt understand.
require.extensions['.css'] = function () { };
