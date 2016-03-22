output = function() {
  cb({
    transform: $.create(transform.perspective($.focusZ))
  });
  done();
};
