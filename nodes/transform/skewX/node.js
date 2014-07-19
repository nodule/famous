output = function() {
  cb( {
    transform: transform.skewX(input.angle)
  });
  done();
};
