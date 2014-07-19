output = function() {
  cb( {
    transform: transform.transpose(input.transform)
  });
  done();
};
