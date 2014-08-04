var page = require('webpage').create();
var system = require('system')
var t, address;

/*

Ok, I want to be able to test headless for Famo.us
and all other browser components.

graphs will just be in graphs/

Somehow I have to detect the environment.
Maybe by first loading all nodes.

server and browser is a conflict.

Will allow me to quickly test whether browserside nodes run at all,
instead of having to discover that within the ui.


*/

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];

page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};

page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  } else {
    t = Date.now() - t;
    console.log('Loading time ' + t + ' msec');
  }
  phantom.exit();
});
