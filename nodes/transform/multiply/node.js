output = function() {

  cb({
    out: transform.multiply(input.transformA, input.transformB)
  });
  done();

};
