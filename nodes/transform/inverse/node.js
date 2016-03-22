output = function() {
  cb({
    transform: $.create(transform.inverse($.transform))
  });
  done();
};
