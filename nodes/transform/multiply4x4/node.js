output = function() {
  cb({
    out: $.create(transform.multiply4x4($.transformA, $.transformB))
  });

  done();
};
