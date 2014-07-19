output = function() {
  cb( {
    transform: transform.build(input.spec)
  });
  done();
};
