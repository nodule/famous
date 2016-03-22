output = function() {
  cb({
    out: $.create(transform.notEquals($.transformA, $.transformB))
  });
  done();
};
