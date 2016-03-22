state = new famous.surfaces.InputSurface({});

on.input.name = function() {
  state.setName($.name);
};

on.input.size = function() {
  state.setSize($.size);
};

on.input.attributes = function() {
  state.setProperties($.attributes);
};

on.input.classes = function() {
  state.setClasses($.classes);
};

on.input.type = function() {
  state.setType($.type);
};

on.input.value = function() {
  state.setValue($.value);
};

on.input.placeholder = function() {
  state.setPlaceholder($.placeholder);
};

on.input.focus = function() {
  state.focus();
};

on.input.blur = function() {
  state.blur();
};

on.start = function() {
  output({ surface: $.create(state) });
};
