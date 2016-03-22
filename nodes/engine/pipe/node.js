on.input.target = function() {
  output({
    event_handler: $.create(famous.core.Engine.pipe($.target))
  });
};
