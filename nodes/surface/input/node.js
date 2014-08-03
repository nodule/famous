state = new input_surface({});

on.input.name = function() {
  state.setName(data);
};

on.input.size = function() {
  state.setSize(data);
};

on.input.properties = function() {
  state.setProperties (data);
};

on.input.classes = function() {
  state.setClasses(data);
};

on.input.type = function() {
  state.setType(data);
};

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

output = { surface: state };
