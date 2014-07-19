output = function() {
  cb( {
    out: transform.interpret(input.transform)
  });
  done();
};
