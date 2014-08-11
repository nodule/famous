output = function(cb) {

  input.surface.on(input.type, function() {
    cb({ event: {} });
  }.bind(input.surface));

  cb({ surface: input.surface });
  done();
};
