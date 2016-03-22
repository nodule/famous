output = function() {
  cb({
    transform: $.write('transform', transform.transpose($.transform))
  });
  done();
};
