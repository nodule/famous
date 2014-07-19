output = function() {
  cb( {
    transform: transform.aboutOrigin(input.origin, input.matrix)
  });
  done();
};
