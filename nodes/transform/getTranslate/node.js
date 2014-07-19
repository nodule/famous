output = function() {
  cb( {
    translate: transform.getTranslate(input.translate)
  });
  done();
};
