output = function() {
  var opts =  {
    origin: $.origin
  };

  if($.transform) {
    opts.transform = $.transform;
  } else {
    opts.transform = function() {
      cb( { animate: '' });
    };
  }
  if($.size) opts.size = $.size;
  if($.opacity) opts.opacity = $.opacity;

  cb( {
    modifier: $.create(new famous.core.Modifier(opts))
  });

  done();
};
