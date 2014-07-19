output = function() {
  cb( {
    transform: transform.perspective(input.focusZ)
  });
  done();
};
