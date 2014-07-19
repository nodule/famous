state = input.container;

on.input.renderable = function() {
  output({ render_node: state.add(data) });
};
