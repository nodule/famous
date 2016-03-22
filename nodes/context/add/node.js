on.input.obj = function() {
  output({
    render_node: $.create($.context.add($.obj)),
    context: $.create($.context)
  })
};
