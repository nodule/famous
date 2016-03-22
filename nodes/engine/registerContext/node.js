on.input.context = function() {
  output({
    famous_context: $.create(famous.core.Engine.registerContext($.context))
  });
};
