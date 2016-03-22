output = function() {
  cb( {
    transform: $.create(transform.skew($.phi, $.theta, $.psi))
  });
  done();
};
