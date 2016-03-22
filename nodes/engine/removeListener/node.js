output = function() {
  cb({
    event_handler: $.create(famous.core.Engine.removeListener($.type, $.handler))
  })
  done();
};
