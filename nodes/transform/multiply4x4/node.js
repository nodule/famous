output = function() {

  cb({
    out: transform.multiply4x4(input.transformA, input.transformB);
  });

  done();

};
