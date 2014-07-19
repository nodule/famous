state = new input_surface(input.options);

on.input.value = function() {
  state.setContent(data);
};

on.input.placeholder = function() {
  state.setPlaceholder(data);
};

on.input.focus = function() {
  state.focus();
};

on.input.blur = function() {
  state.blur();
};

output( { surface: state } );
