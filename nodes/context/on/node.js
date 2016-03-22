on.input.type = function() {
  output({
    event_handler: $.create($.context.on($.type)),
    context: $.get('context')
  })
};
on.input.object = function() {
  output({
    event_handler: $.create($.context.on($.object)),
    context: $.get('context')
  })
};
