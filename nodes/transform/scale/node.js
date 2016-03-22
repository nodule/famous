output = function() {
  cb( {
    transform: $.create(transform.scale($.x, $.y, $.z))
  });
  done();
};
