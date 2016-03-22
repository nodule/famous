output = function() {
  cb({
    transform: $.create(transform.rotateX($.theta))
  });
  done();
};
