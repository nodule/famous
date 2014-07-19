output = function() {
  cb( {
    transform: transform.average(input.transform1, input.transform2)
  });
  done();
};
