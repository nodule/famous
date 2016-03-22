output = function() {
  cb( {
    transform: $.create(transform.thenScale($.m, $.s))
  });
  done();
};
