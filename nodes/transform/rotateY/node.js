output = function() {
  cb({
    transform: $.create(transform.rotateY($.theta))
  });
  done();
};
