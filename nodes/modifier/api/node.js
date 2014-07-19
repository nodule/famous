output = function() {
  var opts =  { origin: input.origin, transform: input.transform };
  if(input.size) opts.size = size;
  if(input.opacity) opts.opacity = size;
  cb( {
    modifier: new modifier(opts)
  });
  done();
};
