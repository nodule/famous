output = function() {

  input.surface.on(input.type, function(ev) {
    // probably there is no ev..
     output({ event: {} });
  });

  output({ surface: input.surface });
  done();
};
