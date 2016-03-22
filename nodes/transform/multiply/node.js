output = function() {
  cb({
    out: $.create(transform.multiply($.transformA, $.transformB))
  });
  done();
};
