output = function() {
  cb( {
    transform: transform.skewY(input.angle)
  });
  done();
};
