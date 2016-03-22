output = function() {
  cb({
    transform: $.create(transform.average($.transform1, $.transform2))
  });
  done();
};
