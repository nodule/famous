output = function() {
  cb( {
    transform: transform.moveThen(input.vector, input.matrix)
  });
  done();
};
