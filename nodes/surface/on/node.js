output = function() {

  input.surface.on(input.type, function() {
     output({ event: {} });
  }.bind(input.surface));

  output({ surface: input.surface });
  done();
};
