output = function() {
  cb({
    transform: $.create(transform.rotateAxis($.v, $.theta))
  });
  done();
};
