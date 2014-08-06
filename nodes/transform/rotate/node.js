output = function() {
  cb( {
    transform: transform.rotate(input.phi, input.theta, input.psi)
  });
  done();
};
