on.start = function() {
  state = famous.core.Engine.createContext();
  output( { context: state });
};

on.input.el = function() {
  state.migrate(data);
};
