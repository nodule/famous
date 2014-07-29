state = new textarea_surface({});

on.input.size = function() {
  state.setSize(data);
};

on.input.classes = function() {
  state.setClasses(data);
};

on.input.properties = function() {
  state.setProperties(data);
};

on.input.content = function() {
  state.setContent(data);
};

on.input.name = function() {
  state.setName(data);
};

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
