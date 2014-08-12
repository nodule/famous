output = function(cb) {
  console.log('SO!', input, cb, output, data);
  input.surface.on(input.event, function() {
    cb({ event: {} });
  }.bind(input.surface));

  cb({ surface: input.surface });
};
console.log('ON LOADED', output);
