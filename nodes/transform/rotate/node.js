output = function() {
  cb({
    transform: $.create(famous.core.Transform.rotate($.phi, $.theta, $.psi))
  });
  done();
};
