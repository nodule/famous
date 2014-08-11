output = function() {
  cb( {
    transform: famous.core.Transform.rotate(input.phi, input.theta, input.psi)
  });
  done();
};
