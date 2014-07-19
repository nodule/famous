state = new input_surface(input.options);

on.input.value = function() {
  state.setValue(data);
};

on.input.placeholder = function() {
  state.setPlaceholder(data);
};

on.input.wrap = function() {
  state.setWrap(data);
};

on.input.cols = function() {
  state.setCols(data);
};

on.input.rows = function() {
  state.setRows(data);
};

on.input.focus = function() {
  state.focus();
};

on.input.blur = function() {
  state.blur();
};

output( { surface: state } );
