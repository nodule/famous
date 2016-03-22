output = function() {
  cb({
    translate: $.create(transform.getTranslate($.translate))
  });
  done();
};
