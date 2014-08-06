state = new famous.surfaces.InputSurface({});

on.input.name = function() {
  state.setName(data);
};

on.input.size = function() {
  state.setSize(data);
};

on.input.attributes = function() {
  state.setProperties (data);
};

on.input.classes = function() {
  state.setClasses(data);
};

on.input.type = function() {
  state.setType(data);
};

on.input.value = function() {
  state.setValue(data);
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

on.start = function() {
  output({ surface: state });
};
