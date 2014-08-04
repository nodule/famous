output = function() {

  cb( {
    event_handler: famous.core.Engine.on(input.type, input.handler)
  });
  done();

};
