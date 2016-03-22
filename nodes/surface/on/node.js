output = function() {
  $.surface.on($.event, function(ev) {
    cb({ event: $.create(ev) });
  }.bind($.surface));

  cb({ surface: $.get('surface') });
  done();
};
