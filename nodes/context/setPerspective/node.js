on.input.perspective = function() {
  $.context.setPerspective($.perspective);
  output({ context: $.get('context') });
};
on.input.transition = function() {
  $.context.setPerspective($.transition);
  output({ context: $.get('context') });
};
on.input.callback = function() {
  $.context.setPerspective($.callback);
  output({ context: $.get('context') });
};
