output = function() {
  cb( { event_handler: engine.emit(input.type, input.event) });
  done();
};
