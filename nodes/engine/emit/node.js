output = function() {
  cb( { event_handler: famous.core.Engine.emit(input.type, input.event) });
  done();
};
