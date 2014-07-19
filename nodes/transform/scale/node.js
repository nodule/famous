output = function() {
  cb( {
    transform: transform.scale(input.x, input.y, input.z)
  });
  done();
};
