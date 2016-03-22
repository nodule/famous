on.input.type = function() {
  output({
    event_handler: $.create($.context.removeListener($.type)),
    context: $.get('context')
  })
};
on.input.handler = function() {
  output({
    event_handler : $.create($.context.removeListener($.handler)),
    context: $.get('context')
   })
};
