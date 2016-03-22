output = function() {
  cb({
    transform: $.create(transform.skewY($.angle))
  });
  done();
};
