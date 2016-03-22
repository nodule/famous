output = function() {
  cb({
    transform: $.create(transform.moveThen($.vector, $.matrix))
  });
  done();
};
