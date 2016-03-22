state = $.container;

on.input.renderable = function() {
  output({ render_node: $.create(state.add($.renderable)) });
};
