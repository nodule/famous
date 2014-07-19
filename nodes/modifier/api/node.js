output = function() {

  var opts =  {
    origin: input.origin,
  };

  if(input.opacity) opts.opacity = size;

  if(input.transform) {
    opts.transform = input.transform;
  } else {
    opts.transform: function() {
      cb( { animate: '' });
    }
  }
  if(input.size) opts.size = size;
  if(input.opacity) opts.opacity = size;

  cb( {
    modifier: new modifier(opts)
  });

  done();
};
