output = function() {
  cb( {
    transform: transform.thenScale(input.m, input.s)
  });
  done();
};
