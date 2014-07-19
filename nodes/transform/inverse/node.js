output = function() {
  cb( {
    transform: transform.inverse(input.transform)
  });
  done();
};
