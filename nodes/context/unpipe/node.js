on.input.target = function() {
  output({
    event_handler: $.create($.context.unpipe($.target)),
    context: $.get('context')
  })
};
