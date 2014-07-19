output = function() {
  output( {
    transform: transform.thenMove(input.transform, input.t)
  });
  done();
};
