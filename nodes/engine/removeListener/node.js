output = function() {
  cb( { event_handler: famous.core.Engine.removeListener(input.type, input.handler) })
  done();
};
