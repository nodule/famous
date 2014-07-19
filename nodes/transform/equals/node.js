output = function() {
  cb({
    out: transform.equals(input.transformA, input.transformB)
  });
  done();
};
