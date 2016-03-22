output = function() {
  cb( {
    transform: $.create($.rotateZ($.theta))
  });
  done();
};
