on.start = function() {
  state = famous.core.Engine.createContext();
  output( { context: $.create(state) });
};

on.input.el = function() {
  state.migrate($.el);
};
