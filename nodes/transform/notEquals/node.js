output = function() {
  cb({
    out: transform.notEquals(input.transformA, input.transformB)
  });
  done();
};
