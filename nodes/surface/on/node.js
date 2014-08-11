output = function() {

  input.surface.on(input.type, function() {
     output({ event: {} });
  });

  output({ surface: input.surface });
  done();
};
