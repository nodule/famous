output = function() {
  cb( { event_handler: $.create(famous.core.Engine.emit($.type, $.event)) });
  done();
};
