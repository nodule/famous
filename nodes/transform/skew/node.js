output = function() {
  cb( {
    transform: transform.skew(input.phi, input.theta, input.psi)
  });
  done();
};
