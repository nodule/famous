output = function() {

  input.surface.on(input.type, function(ev) {
    // probably there is no ev..
     output({ event: ev });
  });

  output({ surface: input.surface });
  done();
};
