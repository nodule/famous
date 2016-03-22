output = function() {
  cb({
    out: $.create(transform.equals($.transformA, $.transformB))
  });
  done();
};
