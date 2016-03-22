state = new famous.surfaces.TextareaSurface({});

on.input.size = function() {
  state.setSize($.size);
};

on.input.classes = function() {
  state.setClasses($.classes);
};

on.input.attributes = function() {
  state.setProperties($.attributes);
};

on.input.content = function() {
  state.setContent($.content);
};

on.input.name = function() {
  state.setName($.name);
};

on.input.value = function() {
  state.setValue($.value);
};

on.input.placeholder = function() {
  state.setPlaceholder($.placeholder);
};

on.input.wrap = function() {
  state.setWrap($.wrap);
};

on.input.cols = function() {
  state.setColumns($.cols);
};

on.input.rows = function() {
  state.setRows($.rows);
};

on.input.focus = function() {
  state.focus();
};

on.input.blur = function() {
  state.blur();
};

on.start = function() {
  output( { surface: $.create(state) } );
};
