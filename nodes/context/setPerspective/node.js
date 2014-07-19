on.input.perspective = function() {
  input.context.setPerspective(data);
  output( { context: input.context });
};
on.input.[transition] = function() {
  input.context.setPerspective(data);
  output( { context: input.context });
};
on.input.callback = function() {
  input.context.setPerspective(data);
  output( { context: input.context });
};
