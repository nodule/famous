output = function() {
  cb( {
    transform: transform.translate(input.x, input.y, input.z)
  });
  done();
};
