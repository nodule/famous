on.input.container = function() {
  $.context.migrate($.container);
  output( { context: $.get('context') });
};
