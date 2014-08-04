// must be called outside, to have any change.
// will still be buggy though
state = engine.createContext();

on.input.el = function() {
  state.migrate(data);
};
