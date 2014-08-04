// must be called outside, to have any change.
// will still be buggy though
state = engine.createContext(data);

on.input.el = function() {
  output( { context: state });
};
