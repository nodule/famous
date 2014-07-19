output = function() {
  cb( { event_handler: engine.removeListener(input.type, input.handler) })
  done();
};
