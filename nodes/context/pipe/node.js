on.input.target = function() {
  output({
    event_handler: $.create($.context.pipe($.target)),
    context: $.get('context')
  })
};
