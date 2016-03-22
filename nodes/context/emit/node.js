on.input.type = function() {
  output({
    event_handler: $.create($.context.emit($.type)),
    context: $.get('context')
  })
};
on.input.event = function() {
  output({
    event_handler: $.create($.context.emit($.event)),
    context: $.get('context')
  })
};
