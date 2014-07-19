output = function() {
  cb( {
    transform: transform.rotate(phi, theta, psi);
  });
  done();
};
