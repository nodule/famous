output = function() {

  var opts =  {
    origin: input.origin
  };

  if(input.transform) {
    opts.transform = input.transform;
  } else {
    opts.transform = function() {
      cb( { animate: '' });
    };
  }
  if(input.size) opts.size = input.size;
  if(input.opacity) opts.opacity = input.opacity;

  cb( {
    modifier: new modifier(opts)
  });

  done();
};
