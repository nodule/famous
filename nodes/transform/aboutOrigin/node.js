output = function() {
  cb({
    transform: $.create(transform.aboutOrigin($.origin, $.matrix))
  });
  done();
};
