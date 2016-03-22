output = function() {
  cb({
    out: $.create(transform.interpret($.transform))
  });
  done();
};
