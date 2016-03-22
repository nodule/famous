output = function() {
  cb({
    transform: $.create(transform.build($.spec))
  });
  done();
};
