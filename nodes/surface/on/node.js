output = function(cb) {
  input.surface.on(input.event, function() {
    cb({ event: {} });
  }.bind(input.surface));

  cb({ surface: input.surface });
  done();
};
