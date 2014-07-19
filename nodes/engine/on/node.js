output = function() {

  cb( {
    event_handler: engine.on(input.type, input.handler)
  });
  done();

};
