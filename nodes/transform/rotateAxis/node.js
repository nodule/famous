output = function() {
  cb({
    transform: transform.rotateAxis(input.v, input.theta)
  });
  done();
};
