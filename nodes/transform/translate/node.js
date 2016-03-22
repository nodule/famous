output = function() {
  cb( {
    transform: $.create(transform.translate($.x, $.y, $.z))
  });
  done();
};
