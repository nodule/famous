on.start = function() {
  state = engine.createContext();
  output( { context: state });
};

on.input.el = function() {
  state.migrate(data);
};
